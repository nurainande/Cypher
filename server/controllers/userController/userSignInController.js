const bcrypt = require('bcryptjs')
const userModel = require('../../models/userModel')
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body
        console.log(req.body)

        if (!email) {
            throw new Error("Please provide email")
        }
        if (!password) {
            throw new Error("Please provide password")
        }

        const user = await userModel.findOne({ email })
        console.log(user)

        if (!user) {
            throw new Error("User not found")
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        console.log("checkPassoword", checkPassword)

        if (checkPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email,
            }
            const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 * 2 });
            console.log(token)

            const tokenOption = {
                httpOnly: true,
                secure: true
            }

            res.cookie("token", token, tokenOption).status(200).json({
                message: "Login successfully",
                data: token,
                success: true,
                error: false
            })

        } else {
            throw new Error("Please check Password")
        }


    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }

}

module.exports = userSignInController