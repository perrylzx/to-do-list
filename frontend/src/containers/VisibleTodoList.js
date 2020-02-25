import { connect } from 'react-redux'
import { fetchTodo } from '../actions/fetchTodo'
import { createTodo } from '../actions/addTodo'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'
import { requestToggleTodo } from '../actions/toggleTodo'


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.todos, state.visibilityFilter)
})
const mapDispatchToProps = dispatch => {
  return {
    fetchTodo: () => dispatch(fetchTodo()),
    createTodo: (value) => dispatch(createTodo(value)),
    requestToggleTodo: (id) => dispatch(requestToggleTodo(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
