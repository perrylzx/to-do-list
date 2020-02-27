const herokuUrl = 'https://powerful-fortress-54332.herokuapp.com'

export const requestToggleTodo = id => ({
  type: 'REQUEST_TOGGLE_TODO',
  id
})

// TODO = verify if this action works
export const receiveToggleTodo = updatedTodo => ({
  type: 'RECEIVE_TOGGLE_TODO',
  updatedTodo
})


// TODO = verify if this action creator works
export const toggleTodo = id => {
  return dispatch => {
    dispatch(requestToggleTodo())
    return (
      fetch(`${herokuUrl}/update-todo`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })
      })
        .then(response => {
          return response.json();
        })
        .then(updatedTodo => {
          return dispatch(receiveToggleTodo(updatedTodo))
        })
    )
  }
}