import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import './index.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <h2 className='bg-orange-500 p-4 mb-4'>Testiiiing</h2>
    <Card clickbtn="open me" cardname="myk"/>
    <Card clickbtn="check me" />
  
  
   
    </>
  )
}

export default App
