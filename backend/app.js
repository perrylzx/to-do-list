import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { Todo } from './Todo/models';
import { CreateTodo } from './Todo/TodoControllers/CreateTodo';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// app.post('/create-todo', (req, res) => {
//   Todo.create({
//     value: req.body.value,
//     completed: false
//   }).then(() => {
//     res.send('success');
//   });
// });

app.post('/create-todo', (req, res) => {
  CreateTodo(req, res);
});

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
});


export default module.exports = app;
