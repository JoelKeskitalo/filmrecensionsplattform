const express = require('express')
const router = express.Router()
const userController = require('../controllers/userControllers')

// base: http://localhost:6000/moviereview-api/users


router.post('/register', userController.registerUser)
router.post('/login', userController.loginUser)

module.exports = router