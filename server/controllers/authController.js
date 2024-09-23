const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Helper function to create JWT token
const createToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN || '7d', // Token expiry duration
    });
};

// Register Controller
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email is already in use' });
        }

        // Create new user
        const newUser = await User.create({
            name,
            email,
            password, // Password will be hashed in the pre-save hook
        });

        // Generate token
        // const token = createToken(newUser._id);

        // Return the token and user details (excluding password)
        res.status(201).json({
            status: 'success',
            // token,
            data: {
                user: {
                    id: newUser._id,
                    name: newUser.name,
                    email: newUser.email,
                    role: newUser.role,
                },
            },
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error, please try again later' });
    }
};

// Login Controller
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide both email and password' });
        }

        // Check if user exists and retrieve password field
        const user = await User.findOne({email}).select('+password');
        // console.log(user)
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare the entered password with the stored hashed password
        const isPasswordCorrect = await user.correctPassword(password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // console.log(isPasswordCorrect)

        /*
        // Generate token
        const token = createToken(user._id);

        // token Option
        const tokenOption = {
            httpOnly: true,
            secure: true
        }

        // Return the token and user details (excluding password)
        res.cookie("token",token,tokenOption).status(200).json({
            status: 'success',
            message: "Login successfully",
            token,
            data: {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
            },
        });
       
        */
    
        const tokenData = {
            _id: user._id,
            email: user.email,
        }

        const token = await jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 5 });
        console.log(token)

        const tokenOption = {
            httpOnly: true,
            secure: true
        }

        res.cookie("token", token, tokenOption)
        res.status(200).json({
            message: "Login successfully",
            data: token,
            success: true,
            error: false
        })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error, please try again later' });
    }
};
