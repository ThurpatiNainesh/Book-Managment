const express = require('express');
const router = express.Router();
const bookControllers = require('../controllers/bookControllers.js')
const userControllers = require('../controllers/userControllers.js')
const reviewControllers = require('../controllers/reviewControllers.js')


router.post('/register', userControllers.createUser)

router.post('/login', userControllers.userLogin)

router.post('/books', bookControllers.createBook)

router.get('/books', bookControllers.getBooks)

router.post('/books', bookControllers.getBooks)

router.put('/books/:bookId', bookControllers.updateBook)

router.post('/books/:bookId/review', reviewControllers.addReview)


 





module.exports = router