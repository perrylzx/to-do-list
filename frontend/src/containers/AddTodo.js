import React from 'react'
import { connect } from 'react-redux'
import { createTodo } from '../actions/addTodo'

const RequestAddTodo = ({ dispatch }) => {
  let input
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return;
          }
          dispatch(createTodo(input.value))
          input.value = '';
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
export default connect()(RequestAddTodo)

