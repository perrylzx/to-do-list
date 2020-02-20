const initialState = {
  isFetching: false,
  todos: []
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            value: action.value,
            text: action.text,
>>>>>>> fd408eb3792f0ee169f614b41b7f465c4f3274b5
            completed: false
          }
        ]
      }
    case 'REQUEST_TODOS':
      return {
        ...state,
        isFetching: true,
      }
    case 'RECEIVE_TODOS':
      return {
        ...state,
        isFetching: false,
        todos: action.todos
      }
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      }
    default:
      return state
  }
}

export default todos
