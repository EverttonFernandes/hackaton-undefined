var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/buscarAjuda', (req, res) => {
  console.log('buscar ajuda');
});

router.get('/queroAjudar', (req, res) => {
  
});

router.get('/orientacoesApoiadores', (req, res) => {
  
});

router.get('/orientacoesImigrantes', (req, res) => {
  
});

module.exports = router;
