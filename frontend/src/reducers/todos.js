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

    //todo = move this logic over to receive_toggle_todo, as it is where the actual strikethrough happens
    case 'REQUEST_TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      }

    //todo = write a reducer for RECEIVE_TOGGLE_TODO

    default:
      return state
  }
}

export default todos
