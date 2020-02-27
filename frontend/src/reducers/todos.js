const initialState = {
  isFetching: false,
  todos: []
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_ADD_TODO':
      return {
        ...state,
        isFetching: true
      };

    case 'RECEIVE_ADD_TODO':
      return {
        ...state,
        isFetching: false,
        todos: [
          ...state.todos,
          {
            id: action.id,
            value: action.value,
            completed: action.completed,
          }
        ]
      };

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

    case 'REQUEST_TOGGLE_TODO':
      return {
        ...state,
        isFetching: true
      }

    case 'RECEIVE_TOGGLE_TODO':
      return {
        ...state,
        isFetching: false,
        todos: state.todos.map(todo =>
          todo.id === action.updatedTodo.id ? { ...todo, completed: action.updatedTodo.completed } : todo
        )
      }

    default:
      return state
  }
}

export default todos
