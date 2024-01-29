import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  const addValue=()=> {
    setCounter(counter+1)
  }


  const removeValue=() => {
    setCounter(counter-1)
  }


  return (
    <>
     <h1>Count: {counter} </h1>
      <button
      onClick={addValue}>Add count</button> 
     <br></br>
     <button
     onClick={removeValue}> Remove count</button>
    </>
  )
}

export default App
