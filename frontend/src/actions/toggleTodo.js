export const requestToggleTodo = id => ({
  type: 'REQUEST_TOGGLE_TODO',
  id
})

export const receiveToggleTodo = id => ({
  type: 'RECEIVE_TOGGLE_TODO',
  id
})


// TODO = verify if this actions works
export const toggleTodo = id => {
  return dispatch => {
    dispatch(requestToggleTodo())
    return (
      fetch("http://localhost:4000/update-todo", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })
      })
        .then(response => {
          return response.json();
        })
        .then(updated_todo => {
          return dispatch(receiveToggleTodo(updated_todo))
        })
    )
  }
}