import React from 'react'
import Counter from './components/Counter'
import TotalCount from './components/TotalCount'

const App = () => {
  return (
    <div className='w-screen h-screen p-10 bg-gray-100 text-slate-700 '>
      
      <h1 className='max-w-md mx-auto text-center text-2xl font-semibold'>simpole counter </h1>
        <div className='max-w-md mx-auto mt-10 space-y-5 '>
          <Counter/>
          <Counter/>
          <TotalCount TotalCount={10}/>
        </div>
      </div>
  )
}

export default App