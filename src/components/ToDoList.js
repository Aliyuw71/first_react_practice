import { useState } from "react"
import React  from 'react'
import styles from "./Product.module.css"

function ToDoList() {
    const [todos, setTodo] = useState([])
    const [input, setInput] = useState("")
    const [start, setStart] = useState("")
    const addToList = (e) => {
        e.preventDefault()
        setTodo([...todos, input])
        setInput("")
    }
    const endIt = () =>{
      setStart("THE END")
    }
  return (
    <div>
        <h1>Welcome to my Todo list</h1>

        <form action="">
            <input 
            value={input}
            onChange={e => setInput(e.target.value)}
            type="text" /> 
            <button type="submit" onClick={addToList} className={styles.btn}>Add todo</button>
        </form>
        <h3>List of Todos</h3>
        {todos.map((todo) => (<p>{todo}</p>)
        )}
        
    </div>
  )
}

export default ToDoList