import createError from 'http-errors';
import "core-js/stable";
import "regenerator-runtime/runtime";
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors'
import { createTodo, retrieveTodos, updateTodo, deleteTodo } from './controllers/todoControllers';

const app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// test heroku
app.get('/', (req, res) => {
  res.send('sent');
});

// create api
app.post('/create-todo', (req, res) => {
  createTodo(req, res);
});

// retrieve api 
app.get('/request-todo', (req, res) => {
  console.log('456')
  retrieveTodos(req, res);
});

// update api (not working for now)
app.post('/update-todo', (req, res) => {
  updateTodo(req, res);
});

//delete api
app.delete('/delete-todo', (req, res) => {
  deleteTodo(req, res);
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
