// informing the reducer that the request, isfetching to true
export const requestTodos = () => ({
  type: 'REQUEST_TODOS',
})
// received??
export const receiveTodos = (todos) => ({
  type: 'RECEIVE_TODOS',
  todos,
})

// fetching 
export const fetchTodo = () => dispatch => {
  console.log('success')
  dispatch(requestTodos());
  return fetch('http://localhost:4000/request-todo')
    .then(response => {
      return response.json();
    })
    .then(json => dispatch(receiveTodos(json)))
}
