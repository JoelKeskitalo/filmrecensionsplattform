const mongoose = require('mongoose')
const Movie = require('../models/movieModel')

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

    } catch (error) {
        res.status(400).json(error)
    }
}

exports.getMovieById = async (req, res) => {
    try {

    } catch (error) {
        res.status(400).json(error)
    }
}

exports.updateMovieById = async (req, res) => {
    try {

    } catch (error) {
        res.status(400).json(error)
    }
}

exports.getAllReviewsById = async (req, res) => {
    try {

    } catch (error) {
        res.status(400).json(error)
    }
}

exports.deleteMovieById = async (req, res) => {

}