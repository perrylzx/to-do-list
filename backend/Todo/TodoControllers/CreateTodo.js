import { Todo } from '../models/todo'

export const createTodo = (req, res) => {
  // stores task provided by user in variable
  const value = req.body.value;
  return Todo.create({
    value: value,
    completed: false
  }).then(() => {
    res.send("added a task");
  });
};
