var express = require('express');
var debug = require('debug')('app');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
var localStrategy = require('passport-local').Strategy

//session and passpost
var session = require('express-session')
var flash = require('express-flash');
var passport = require('passport');
var MongoStore = require('connect-mongo')(session);

var index = require('./routes/index');
var user = require('./routes/user');
var student = require('./routes/student');
var teacher = require('./routes/teacher');

//connect to mongodb
var dbUrl = 'mongodb://localhost:27017/ma';
MongoClient.connect(dbUrl).then((db) => {
  console.log('connect to database done');
  routerInitializeDatabase(db);
})

//-------------------------------------------
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//session and passpost
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({ url: dbUrl })
}))
app.use(passport.initialize());
app.use(passport.session());


//-------------------------------------
//use router
app.use('/user', users);
app.use('/student', student.router);
app.use('/teacher', teacher.router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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


function routerInitializeDatabase(db){
  student.initializeDatabase(db);
  teacher.initializeDatabase(db);
}




module.exports = app;
