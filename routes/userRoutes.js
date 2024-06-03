const express = require('express')
const router = express.Router()
const userController = require('../controllers/userControllers')

// base: http://localhost:6000/moviereview-api/users


router.post('/register', userController.createUser)
router.post('/login', userController.loginUser)
router.get('/', userController.getAllUsers)

router.delete('/delete', userController.deleteUserByUsername)
router.delete('/:id', userController.deleteUserById)

module.exports = router