

import React, {useState} from 'react'

const Test = () => {
  const [counter, setCounter]=useState(0)
  const subtract=()=>{
    setCounter(counter-1)
  } 
  const add=()=>{
    setCounter(counter+1)
  }

  return (
    <div>
    
    <div style={{fontSize: '2rem'}}>
    
    <button className='btn' onClick={subtract}>-</button>
    <span>{counter}</span>
      <button className=' btn' onClick={add}>+</button>
      <button className='btn btn-cart' onClick={add}>Add to cart</button>
    </div>
    </div>
  )
}

export default Test
