import React from 'react'

export default function Comp3() {
  return (
    <div style={c3style}>
      <h1>Component 3</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries,</p>
    </div>
  )
}

const c3style = {
    margin: '10px',
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}