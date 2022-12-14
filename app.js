var createError = require('http-errors');
var express = require('express');
var path = require('path');

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dateFormat = require('dateformat');
var indexRouter = require('./routes/index');
var akseptasiRouter = require('./routes/akseptasi');
var cron = require('node-cron');

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});


app.use('/', indexRouter);
app.use('/akseptasi', akseptasiRouter);

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
var server = app.listen(9200);
server.timeout = 1000 * 3600 * 2 //hours

var controllers = require('./controllers/akseptasiC');

// function schedulerMandiriFunc() {
//   controllers.schedulerMandiri();
// }

 function schedulerjpas() {
   controllers.postSIKPJPASscheduler('2020-10-01', '2020-10-31', 0, '2020-10-JPAS');
 }

// function schedulerSIKPFunc() {
//   controllers.postSIKPScheduler(dateFormat(new Date(new Date().getFullYear(), new Date().getMonth(), 1), "yyyy-mm-dd"), dateFormat(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0), "yyyy-mm-dd"), 0)
//   .then(function () {
//       controllers.postSIKPScheduler(dateFormat(new Date(new Date().getFullYear(), new Date().getMonth(), 1), "yyyy-mm-dd"), dateFormat(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0), "yyyy-mm-dd"), 1)
//   }).then(function () {
//     controllers.postSIKPScheduler(dateFormat(new Date(new Date().getFullYear(), new Date().getMonth(), 1), "yyyy-mm-dd"), dateFormat(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0), "yyyy-mm-dd"), 2)
//   })
// }
//var task = cron.schedule('*/6 * * * *', () => {
//  schedulerjpas()
//});

//task.start();
