import React from 'react'

function ItemDescription({name, description}) {
  return (
    <div>
        <h1>{name}</h1>
        <h2>{description}</h2>
    </div>
  )
}

export default ItemDescription