import { connect } from 'react-redux'
import { fetchTodo } from '../actions/fetchTodo'
import TodoList from '../components/TodoList'
import { VisibilityFilters } from '../actions'
import { toggleTodo } from '../actions/toggleTodo'


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
    toggleTodo: (id) => dispatch(toggleTodo(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
