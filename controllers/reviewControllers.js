const mongoose = require('mongoose')
const Review = require('../models/reviewModel')

exports.createReview = async (req, res) => {
    try {
        const { movieId, userId, rating, comment } = req.body
        const review = new Review(movieId, userId, rating, comment)
        await review.save()
        res.status(200).json({message: 'Review succcessfully created', review})
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        res.status(200).json(reviews)
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id)

        if(!review) {
            return res.status(404).send('Review not found')
        }

        res.status(200).json({message: 'Review retrieved: ', review})
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.updateReviewById = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (!review) {
            return res.status(404).json({message: 'Review not found'})
        }
        res.status(200).json({message: 'Review updated: ', review})
    } catch (error) {
        res.status(400).send(error)
    }
}

exports.deleteReviewById = async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id)

        if (!review) {
            return res.status(404).send('Review not found')
        }

        res.status(200).json({message: 'Review deleted successfully: ', review})
    } catch(error) {
        res.status(400).send(error)
    }
}