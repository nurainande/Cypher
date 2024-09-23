const express = require('express')
const verifyToken = require('../middlewere/verifyToken')
const userSignUpController = require('../controllers/userController/userSignUpController')
const userSignInController = require('../controllers/userController/userSignInController')
const userDetailsController = require('../controllers/userController/userDetailsController')

const router = express.Router()

router.post('/signup', userSignUpController)
router.post('/signin', userSignInController)
router.get('/user-details', verifyToken, userDetailsController)

module.exports = router;