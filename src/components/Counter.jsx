import React from 'react'
import Count from './Count'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment ,reset} from '../features/counters/CounterSlice'


const Counter = ({id}) => {
  const dispatch = useDispatch()

const count = useSelector((state ) => state.counters.find((counter) => counter.id === id)?.value)

  const incrementHandler = () =>{
    dispatch(increment(id))
  }
  const decrementHandler = () =>{
    dispatch(decrement(id))
  }
  const resetHandler =() =>{
    dispatch(reset(id))
  }
  return (
    <div className='p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
        <Count count={count}/>
        <div className='flex space-x-3'>
          <Button handler={incrementHandler}>increment</Button>
          <Button handler={decrementHandler} type="danger"> Decrement</Button> 
          <Button handler={resetHandler} type="danger"> Reset</Button> 
        </div>
    </div>
  )
}

export default Counter