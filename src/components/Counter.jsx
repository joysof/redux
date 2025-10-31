import React, { useState } from 'react'
import Count from './Count'
import Button from './Button'

const Counter = () => {
  const [count , setCount] = useState(10)

  const incrementHandler = () =>{
    setCount((prevCount) => prevCount +1)
  }
  const decrementHandler = () =>{
    setCount((prevCount) => prevCount -1)
  }
  return (
    <div className='p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
        <Count count={count}/>
        <div className='flex space-x-3'>
          <Button handler={incrementHandler}>increment</Button>
          <Button handler={decrementHandler} type="danger"> Decrement</Button> 
        </div>
    </div>
  )
}

export default Counter