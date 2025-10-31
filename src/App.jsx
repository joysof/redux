import React from 'react'
import Counter from './components/Counter'
import TotalCount from './components/TotalCount'
import { useSelector } from 'react-redux'

const App = () => {

  const counters = useSelector((state) =>state.counters)
  const total = counters.reduce((sum , counter) => sum + counter.value , 0)

  return (
    <div className='w-screen h-screen p-10 bg-gray-100 text-slate-700 '>
      
      <h1 className='max-w-md mx-auto text-center text-2xl font-semibold'>simpole counter </h1>
        <div className='max-w-md mx-auto mt-10 space-y-5 '>
          <Counter id={1}/>
          <Counter id={2}/>
          <TotalCount TotalCount={total}/>
        </div>
      </div>
  )
}

export default App