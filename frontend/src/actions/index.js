let nextTodoId = 0

export const addTodo = value => ({

})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const requestTodos = () => ({
  type: 'REQUEST_TODOS',
})

export const receiveTodos = (todos) => ({
  type: 'RECEIVE_TODOS',
  todos,
})

export const fetchTodo = () => dispatch => {
  dispatch(requestTodos());
  console.log('def')
  return fetch('http://localhost:4000/request-todo')
    .then(response => {
      console.log('ghi')
      return response.json();
    })
    .then(json => dispatch(receiveTodos(json)))
}


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
