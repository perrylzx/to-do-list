let nextTodoId = 0

<<<<<<< HEAD
export const addTodo = value => ({

=======
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
>>>>>>> fd408eb3792f0ee169f614b41b7f465c4f3274b5
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

<<<<<<< HEAD
export const receiveTodos = (todos) => ({
  type: 'RECEIVE_TODOS',
  todos,
=======
export const receiveTodos = (json) => ({
  type: 'RECEIVE_TODOS',
  value: json.data.children.map(child => child.data),
>>>>>>> fd408eb3792f0ee169f614b41b7f465c4f3274b5
})

export const fetchTodo = () => dispatch => {
  dispatch(requestTodos());
<<<<<<< HEAD
  console.log('def')
  return fetch('http://localhost:4000/request-todo')
    .then(response => {
      console.log('ghi')
      return response.json();
    })
=======
  return fetch('http://localhost:4000/request-todos')
    .then(response => response.json())
>>>>>>> fd408eb3792f0ee169f614b41b7f465c4f3274b5
    .then(json => dispatch(receiveTodos(json)))
}


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
