import { useState } from 'react'
import './App.css'

function App() {
  //hook is useState
let [counter,setCounter]= useState(15)
//let counter =16 
let addValue = ()=>
{
  counter = counter + 1
  setCounter(counter)
}
 let removeValue = ()=>
  {
    counter = counter - 1 
    setCounter(counter)
  }

  return (
    <>
    <h1>chai</h1>
    <h2> Counter value:{counter}</h2>

    <button onClick={addValue}> add value</button><br/>
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
