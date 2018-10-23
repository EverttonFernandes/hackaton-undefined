var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var http = require('http');
var app = express();

const { mongoose } = require('./database');
app.set('port', process.env.PORT || 3000);


var indexRouter = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

var server = app.listen(app.get('port'));

module.exports = app;
