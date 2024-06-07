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

exports.getAllReviewsById = async (req, res) => {
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

exports.getMovieRatings = async (req, res) => {
    try {

        const movies = await Movie.aggregate([
            {
                $lookup: {
                    from: 'reviews', // namnet på den samling som innehåller recensioner
                    localField: '_id', // fältet i movies som matchar 
                    foreignField: 'movieId', // Fältet i reviews som matchar¨
                    as: 'reviews' // nament på det nya fältet som läggs till med det matchande dokumentet 
                }
            },
            {
                $addFields: {
                    averageRating: { $avg: '$reviews.rating'} // beräknar det genomsnittliga betyget 
                }
            },
            {
                $project: {
                    title: 1,
                    director: 1,
                    releaseYear: 1,
                    genre: 1,
                    averageRating: 1
                }
            }
        ])

        res.status(200).json(movies)

    } catch(error) {
        res.status(400).json({message: 'Error fetching movie ratings', error})
    }
}