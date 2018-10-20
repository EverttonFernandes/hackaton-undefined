var express = require('express');
var router = express.Router();
const Movie = require('../models/quero');

router.post('/', async (req, res) => {
  const quero = new Quero({
      name: req.body.name, //falta os form
      year: req.body.year
  });
  await quero.save();
   res.json({
      'status': 'Saved'
   });
   //dar redirect
});

module.exports = router;
