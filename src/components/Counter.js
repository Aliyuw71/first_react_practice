import React from 'react'
import { useState } from 'react'

function Counter() {
    const [number, setNumber] = useState(0)
    const increase = ()=> {
        setNumber(number + 1)
    }
    const reset = ()=> {
      setNumber(number)
  }
  const decrease = ()=> {
    setNumber(number -1)
  }
  
  return (
    <div>
          <h1>Number : {number}</h1>
          <button onClick={increase}>Increase</button>
          <button onClick={reset}>Reset</button>
          <button onClick={decrease}>Decrease</button>
        
    </div>
  )
}

export default Counter