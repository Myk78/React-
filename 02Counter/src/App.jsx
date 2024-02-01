import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,SetCounter] = useState(15);
  // let counter = 13
  const addvalue = () =>{
    if(counter < 20){
      SetCounter(counter +1)
    }
    console.log("clicked",Math.random());
    // counter = counter+1;
    // SetCounter(counter)
  }
  const removeValue = () =>{
    if(counter > 0){
      SetCounter(counter-1)
    }
  }


  return (
    <>
    <p>CHai kay sat react</p>
    <h2>Counter value {counter} </h2>
    <button onClick={addvalue} disabled ={counter===20}>
      Add Value</button>
      <br />
      <button onClick={removeValue} disabled ={counter===0}
      >decrease value {counter}</button>
      <footer>foot{counter}</footer>
    </>
  )
}

export default App
