const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieControllers')

// base: http://localhost:6000/moviereview-api/movies

router.post('/', movieController.addMovie)
router.get('/', movieController.getAllMovies)
router.get('/:id', movieController.getMovieById)

router.put('/:id', movieController.updateMovieById)

router.get('/:id/reviews', movieController.getAllReviewsById)
router.delete('/:id', movieController.deleteMovieById) 

module.exports = router