const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index.hbs', { title: 'Home'}));

module.exports = router;
