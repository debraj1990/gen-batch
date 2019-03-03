var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')

const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');

var methodOverride = require('method-override')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require('./routes/posts');
var postsApiRouter = require('./routes/posts-api');


require('./config/passport-config')(passport);


var app = express();

//--------------------------------------------------------------
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

//--------------------------------------------------------------
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

//--------------------------------------------------------------

// Global variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

//--------------------------------------------------------------

let url = "mongodb://user1:user123@ds213255.mlab.com:13255/facebook"
mongoose.connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log("connected with mongodb");
  })
  .catch(() => {
    console.log("error while connecting with mongoDB");
  })
//--------------------------------------------------------------

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);
app.use('/api/posts', postsApiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');

});

module.exports = app;
