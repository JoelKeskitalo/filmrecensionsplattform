const express = require('express')
const router = express.Router()
const reviewController = require('../controllers/reviewControllers')

// base: http://localhost:6000/moviereview-api/reviews

router.post('/', reviewController.createReview)
router.get('/', reviewController.getAllReviews)
router.get('/:id', reviewController.getReviewById)
router.put('/:id', reviewController.updateReviewById)
router.delete('/:id', reviewController.deleteReviewById)