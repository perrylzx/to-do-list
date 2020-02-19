import { Todo } from '../db/models'

//create api
export const createTodo = (req, res) => {
  const value = req.body.value;
  return Todo.create({
    value: value,
    completed: false
  }).then(() => {
    res.send("added a task");
  });
};

// retrieve row if the value you pass in the request matches with the value in the table
export const retrieveTodos = async (req, res) => {
  console.log('123')
  const todos = await Todo.findAll({});
  res.send(todos);
};


// update value of row if id matches with the request
// TODO = how to request two things and then take it out and put it inside two variables. what data type is req? 
export const updateTodo = (req, res) => {
  const id = req.body.value;
  const update = req.body.value[0];
  Todo.update({
    value: update
  }, {
    where: {
      id: id
    }
  }).then(() => {
    console.log('Updated');
  }).catch((e) => {
    console.log("Error" + e);
  });
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