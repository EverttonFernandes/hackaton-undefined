var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/buscarAjuda', (req, res) => {
  res.render('buscarAjuda', {erros: '', apoiador: {}});
});

router.get('/queroAjudar', (req, res) => {
  res.render('queroAjudar', {erros: '', imigrante: {}});
});

router.get('/orientacoesApoiadores', (req, res) => {
  
});

router.get('/orientacoesImigrantes', (req, res) => {
  
});

module.exports = router;
