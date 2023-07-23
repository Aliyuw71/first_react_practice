import React from 'react'
import useRandom from './useRandom'

function Jokes() {
    const comment = useRandom()
    const loader = () =>{
        window.location.reload();
    }
    

  return (<div>
            <h1>The comment generator</h1>
            <button onClick = {loader}>Generate comments</button>
            <p>{comment}</p>
          </div>
  )
}

export default Jokes