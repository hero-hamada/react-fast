import React, { useEffect } from 'react'
import TodoList from './Todo/TodoList';
import AddTodo from './Todo/AddTodo';
import Context from './context';
import Modal from './Modal/Modal';


function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Buy bread'},
    {id: 2, completed: false, title: 'Buy milk'},
    {id: 3, completed: false, title: 'Buy apple'}
  ])
  // let todos = 

  useEffect(() => {
    
  }, [])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      }) 
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([
      {
        title,
        id: Date.now(),
        completed: false
      }
    ]))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <h1>Todo App</h1>

        <Modal/>

        <AddTodo onCreate={addTodo}/>
        {todos.length ? (<TodoList todos={todos} onToggle={toggleTodo}/>) : (<p>No todos!</p>)}

      </div>
    </Context.Provider>
  );
}

export default App;
