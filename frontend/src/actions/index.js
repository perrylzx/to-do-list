let nextTodoId = 0

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
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

export const receiveTodos = (json) => ({
  type: 'RECEIVE_TODOS',
  value: json.data.children.map(child => child.data),
})

export const fetchTodo = () => dispatch => {
  dispatch(requestTodos());
  return fetch('http://localhost:4000/request-todos')
    .then(response => response.json())
    .then(json => dispatch(receiveTodos(json)))
}


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}