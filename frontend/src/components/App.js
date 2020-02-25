import React from 'react'
import Footer from './Footer'
import RequestAddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
const App = () => (
  <div>
    <RequestAddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)
export default App