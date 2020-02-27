import { Todo } from '../db/models'

//create api
export const createTodo = async (req, res) => {
  const value = req.body.value;
  const created_todo = await Todo.create({
    value: value,
    completed: false
  });
  res.send(created_todo);
};

export const retrieveTodos = async (req, res) => {
  const todos = await Todo.findAll({});
  res.send(todos);
};

// update this api to fit the frontend toggletodo, for now this api is not working as intended
export const updateTodo = async (req, res) => {
  const id = req.body.id;
  const todo = await Todo.findByPk(id)
  await todo.update({
    completed: !todo.completed
  })
  res.send(todo)
};

//delete row where id in req matches
export const deleteTodo = (req, res) => {
  const id = req.body.value;
  Todo.destroy({
    where: {
      id: id
    }
  }).then(() => {
    console.log("Deleted");
  }).catch((e) => {
    console.log("Error" + e);
  });
};