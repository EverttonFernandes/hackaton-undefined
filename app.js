var createError = require('http-errors');
var express = require('express');
var path = require('path');

var http = require('http');
var app = express();
/**
 * Get port from environment and store in Express.
 */


app.set('port',process.env.PORT || '3000');

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
server.listen(app.get('port'));
server.on('listening', onListening);

/**
 * Listen on provided port, on all network interfaces.
 */


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var buscaAjudaRouter = require('./routes/buscaAjuda');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/buscaAjuda',buscaAjudaRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
}

module.exports = app;
