

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
    <div style={{textAlign: 'center', fontSize: '2rem'}}>
    <button className='btn' onClick={subtract}>-</button>
      <button className='btn btn-cart' onClick={add}>{counter}+ Add to cart</button>
    </div>
    </div>
  )
}

export default Test
