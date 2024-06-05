const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieControllers')
const authentication = require('../middleware/authentication')

// base: http://localhost:6000/moviereview-api/movies

router.post('/', authentication, movieController.addMovie)
router.get('/', movieController.getAllMovies)
router.get('/:id', movieController.getMovieById)

router.put('/:id', authentication, movieController.updateMovieById)

router.get('/:id/reviews', movieController.getAllReviewsById)
router.delete('/:id', authentication, movieController.deleteMovieById) 

module.exports = router