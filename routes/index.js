var express = require('express');
var router = express.Router();

const Busca = require('../models/busca');
const Quero = require('../models/quero');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/buscaAjuda', (req, res) => {
  const busca = new Busca({
      userName: req.body.userName, 
      pais: req.body.pais, 
      estado: req.body.estado, 
      cidade: req.body.cidade, 
      idiomas: req.body.idiomas, 
      historia: req.body.historia 
  });
  busca.save();
  res.redirect('/');
});

router.post('/queroAjudar', (req, res) => {
  const quero = new Quero({
    userName: req.body.userName, 
    estado: req.body.estado, 
    cidade: req.body.cidade, 
    idiomas: req.body.idiomas, 
    historia: req.body.historia,
    email: req.body.email
  });
  quero.save();
  res.redirect('/');
});
module.exports = router;
