import { Todo } from '../db/models'

// create todo
export const createTodo = async (req, res) => {
  const value = req.body.value;
  const created_todo = await Todo.create({
    value: value,
    completed: false
  });
  res.send(created_todo);
};

// fetch todos
export const retrieveTodos = async (req, res) => {
  const todos = await Todo.findAll({});
  res.send(todos);
};

// toggle todo
export const updateTodo = async (req, res) => {
  const id = req.body.id;
  const todo = await Todo.findByPk(id)
  await todo.update({
    completed: !todo.completed
  })
  res.send(todo)
};