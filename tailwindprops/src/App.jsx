// import { useState } from 'react'
import './App.css'
import Card from './components/Card'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-600 text-black p-4 rounded-xl mt-3 '>Tailwind Test</h1>
      <Card username="chai"/>
      <Card />
    </>
  )
}

export default App
