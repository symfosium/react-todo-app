import { useState } from 'react'
import TodoItem from "./components/TodoItem/TodoItem.jsx";
import TodoForm from "./components/TodoForm/TodoForm.jsx";
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  const handleDelete = (id) => {
    setTodos(prevTodos =>  prevTodos.filter(todo => todo.id !== id));
  }

  const addNewTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  return (
    <div className='App' style={{fontFamily: 'IBM Plex Mono, sans-serif'}}>
      <h1 className='app-title'>Todo List</h1>
      <p className='app-description'>A Simple Todo React List App</p>
      {todos.map((todo, index) => (
          <TodoItem key={index} id={todo.id} todo={todo} onDelete={handleDelete}/>
      ))}
      <TodoForm addTodo={addNewTodo}/>
    </div>
  )
}

export default App
