const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

router.get('/', (req, res, next) => {
  Movie.find()
  .then(movies => res.render('movies.hbs', {movies}))
  .catch(err => next(err))
})


module.exports = router