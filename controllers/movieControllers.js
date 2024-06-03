const mongoose = require('mongoose')
const Movie = require('../models/movieModel')
const Review = require('../models/reviewModel')

exports.addMovie = async (req, res) => {
    try {
        const movie = new Movie(req.body)
        await movie.save()
        res.status(201).json({message: 'Movie added successfully', movie})
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.status(200).json({message: 'Movies saved: ', movies})
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.getMovieById = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        if (!movie) {
            return res.status(404).json({message: 'Movie not found'})
        }
        res.status(200).json(movie)
    } catch (error) {
        res.status(400).json(error)
    }
}

exports.updateMovieById = async (req, res) => { // måste testas
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})

        if (!movie) {
            return res.status(404).json({message: 'Movie not found'})
        }

        res.status(200).json(movie)

    } catch (error) {
        res.status(400).json(error)
    }
}

exports.getAllReviewsById = async (req, res) => { // måste testas
    try {

        const reviews = await Review.find({movieId: req.params.id})
        if (!reviews.length) {
            return res.status(404).json({message: 'No reviews found for this movie'})
        }

        res.status(200).json(reviews)

    } catch (error) {
        res.status(400).json(error)
    }
}

exports.deleteMovieById = async (req, res) => { // måste testas
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id)

        if (!movie) {
            return res.status(404).json({message: 'Movie not found'})
        }

        res.status(200).json({message: 'Movie deleted successfully:', movie})
        
    } catch(error) {
        res.status(400).json(error)
    }
}