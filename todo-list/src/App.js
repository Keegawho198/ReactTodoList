import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import uuidv4 from 'uuid/v4' //generates random id

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef();

  useEffect(() =>{
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]) //when array of todos changes it will get saved through local storage
  //using useeffect function


  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name === '') return
    setTodos(prevTodos =>{
      return [...prevTodos, {id: uuidv4(), name:name, complete: false}]
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
