import { Todo } from '../db/models'


//create api
export const createTodo = (req, res) => {
  console.log('asd');
  const value = req.body.value;
  return Todo.create({
    value: value,
    completed: false
  }).then(() => {
    res.send("added a task");
  });
};

<<<<<<< HEAD
// retrieve all rows
=======
// retrieve row if the value you pass in the request matches with the value in the table
>>>>>>> dfd7f38fcdbbabd2dec2cc7efd1f2fd755f5f390
export const retrieveTodos = async (req, res) => {
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