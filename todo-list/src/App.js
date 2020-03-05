import React, { useState, useRef } from 'react';
import TodoList from './TodoList'
import uuidv4 from 'uuid/v4' //generates random id

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef();

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name === '') return
    setTodos(prevTodos =>{
      return [...prevTodos, {id: uuidv4(), name:name, completed: false}]
    })
    console.log(name)
    todoNameRef.current.value = null; //after we type something and hit button the field will clear
    
  }

  return (
    <>
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type="text" />
      <button onClick = {handleAddTodo}>Add Todo </button>
      <button>Clear completed</button>
      <div>0 left to do </div>
    </>
  )
}

export default App;
