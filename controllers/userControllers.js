const mongoose = require('mongoose')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.createUser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body

        console.log('Request body: ', req.body) // testa 

        const hashedPassword = await bcrypt.hash(password, 10)
        const user = new User({
            username,
            email,
            password: hashedPassword,
            role
        })
        await user.save()
        res.status(201).json({ message: 'User created successfully', user })
    } catch (error) {
        console.error('Error creating user: ', error) // testa
        res.status(400).json(error)
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.loginUser = async (req, res) => {
    try {
        
        const { email, password } = req.body
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(400).json({message: 'No user found'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({message: 'Invalid email or password'})
        }

        const token = jwt.sign({userId: user._id, role: user.role}, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })

        res.status(200).json({message: 'Login successful', token})

    } catch(error) {
        res.status(400).json(error)
    }
}
