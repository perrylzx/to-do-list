// var createError = require('http-errors');
import Sequelize from 'sequelize';
import createError from 'http-errors';
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


/*
* Set up sequelize
*/
//creat new sequelize instance with connection params
const sequelize = new Sequelize(
  'todo-app-database',
  'postgres',
  'password',
  {
    host: 'localhost',
    dialect: 'postgres',
    port: '5433',
  }
);
const Todo = sequelize.define('todo', {
  value: Sequelize.STRING,
  completed: Sequelize.BOOLEAN
});


Todo.sync().then(() => {
  console.log('synced with database');
  return Todo.create({
    value: 'foobar',
    completed: false
  });
});
});

sequelize.authenticate().then(() => {
  console.log('successfully connected to database');
});

//create
app.get('/create-todo', (req, res) => {
  Todo.create({
    value: 'abc',
    completed: false
  }).then(() => {
    res.send('get todos');
  })
})

//retrieve
app.post('/update-todo', (req, res) => {

}).then(() => {
  res.send('update todo');
})

//update
app.put('/Todo/:value/Todo/:completed', (req, res) => {
  Todo = req.params
  Todo.save()
}).then(() => {
  res.send('update todo');
})

//delete

app.delete('/delete-todo', (req, res) => {
  Todo.destroy()
}).then(() => {
  res.send('delete todo');
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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