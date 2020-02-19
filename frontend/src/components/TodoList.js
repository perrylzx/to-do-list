import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

class TodoList extends React.Component {
  componentDidMount() {
<<<<<<< HEAD
    console.log('abc')
=======
>>>>>>> fd408eb3792f0ee169f614b41b7f465c4f3274b5
    this.props.fetchTodo()
  }

  render() {
    const { todos, toggleTodo } = this.props
    return (
      <ul>
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
      </ul>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}
export default TodoList
