const herokuUrl = 'https://powerful-fortress-54332.herokuapp.com'

// action that stores your add todo input into this value key
export const requestAddTodo = () => ({
  type: 'REQUEST_ADD_TODO',
});

export const receiveAddTodo = (createdTodo) => ({
  type: 'RECEIVE_ADD_TODO',
  id: createdTodo.id,
  value: createdTodo.value,
  completed: createdTodo.completed
})

// action creator that dispatches requestAddTodo, fetches from backend create api, post request, then jsons it, then dispatches 
export const createTodo = value => {
  return dispatch => {
    dispatch(requestAddTodo())
    return (
      fetch(`${herokuUrl}/create-todo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ value })
      })
        .then(response => {
          return response.json();
        })
        .then(createdTodo => {
          return dispatch(receiveAddTodo(createdTodo));
        })
    );
  };
};

