import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  const addValue=()=> {
    if(counter<=20){
    setCounter(counter+1)
    }
  }


  const removeValue=() => {
    if(counter>0){
    setCounter(counter-1)
    }
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
