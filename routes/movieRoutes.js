const express = require('express')
const router = express.Router()
const movieController = require('../controllers/movieControllers')
const { authentication, adminAuthentication } = require('../middleware/authentication')

// base: http://localhost:6000/moviereview-api/movies

router.post('/', authentication, adminAuthentication, movieController.addMovie)

router.get('/', movieController.getAllMovies)
router.get('/ratings', movieController.getMovieRatings)
router.get('/:id', movieController.getMovieById)

router.put('/:id', authentication, adminAuthentication, movieController.updateMovieById)

router.get('/:id/reviews', movieController.getAllReviewsById)
router.delete('/:id', authentication, adminAuthentication, movieController.deleteMovieById) 

module.exports = router