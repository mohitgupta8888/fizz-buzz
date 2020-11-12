var express = require('express');
var router = express.Router();
var { generateFizzBuzz } = require('../utils/fizzBuzz');

/* GET home page. */
router.get('/', function (req, res, next) {
  const n = Number.parseInt(req.query.count);
  if (!n) {
    res.status(400).send("Bad Input");
  }
  const fizzBuzz = generateFizzBuzz(n);
  res.json(fizzBuzz);
});

module.exports = router;
