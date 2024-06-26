const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    director: {
        type: String,
        required: true
    },

    releaseYear: {
        type: Number,
        required: true
    },

    genre: { // lägg eventuellt till en array för tillåtelse av fler genres
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie