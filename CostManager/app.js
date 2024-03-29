/*
 * Developers:
 * - First Name: Snir
 * - Last Name: Taub
 * - ID: 207332107
 * 
 * - First Name: Nir
 * - Last Name: Aizen
 * - ID: 313272537
 */

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Require the body-praser module
const bodyParser = require('body-parser');

// Require the router modules
const addCostRouter = require('./routes/addcost');
const reportRouter = require('./routes/report');
const aboutRouter = require('./routes/about');

var app = express();

// // Connect to MongoDB using mongoose
const uri = 'mongodb+srv://snirtaub:Snir15981598@cluster0.r4lpv0t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then( () =>
{
  console.log('Connected to the DB');
}).catch( (err) => 
{
  console.log(`Failed to connect: ${err}`);
});

// Define the port for the server to listen on (use environment variable PORT or default to 3000)
const PORT = process.env.PORT || 3000;

// Start the server and log a message indicating the server is running
app.listen(PORT, () =>
{
  console.log(`Server is running on port ${PORT}`);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Define routes for different parts of the application
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/addcost', addCostRouter);
app.use('/report', reportRouter);
app.use('/about', aboutRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
+

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
