const express = require('express')
const router = express.Router()
const reviewController = require('../controllers/reviewControllers')
const { authentication } = require('../middleware/authentication')

// base: http://localhost:6000/moviereview-api/reviews

router.post('/', authentication, reviewController.createReview)
router.get('/', reviewController.getAllReviews)
router.get('/:id', reviewController.getReviewById)
router.put('/:id', authentication, reviewController.updateReviewById)
router.delete('/:id', authentication, reviewController.deleteReviewById)

module.exports = router