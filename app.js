var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var loginRouter = require('./routes/login');
var usersRouter = require('./routes/users');
var mysqlRouter = require('./routes/mysql');
var mainRouter = require('./routes/main');
var tetrisRouter = require('./routes/tetris');
var snakeRouter = require('./routes/snake');
var pingpongRouter = require('./routes/pingpong')
var chessRouter = require('./routes/chess')
var memoryRouter = require('./routes/memory')
var copycatRouter = require('./routes/copycat')
var sudokuRouter = require('./routes/sudoku')
var blockRouter = require('./routes/block')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, '../static')));

app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/mysql', mysqlRouter);
app.use('/main', mainRouter);
app.use('/tetris', tetrisRouter);
app.use('/snake', snakeRouter);
app.use('/pingpong', pingpongRouter);
app.use('/chess', chessRouter);
app.use('/memory', memoryRouter);
app.use('/copycat', copycatRouter);
app.use('/sudoku', sudokuRouter);
app.use('/block', blockRouter);
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

module.exports = app;
