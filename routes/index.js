const router = require('express').Router();

const bookAPIRoutes = require('./booksApiRoutes');

router.use('/api/books', bookAPIRoutes);

module.exports = router;