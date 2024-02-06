import { useState } from 'react'
import './App.css'
import Card from './components/card'
import './index.css'

function App() {
  const [Color , SetColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: Color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 "> 
      <div className="flex flex-wrap justify-center  gap-x-3 shadow-lg bg-white px-3 py-2 rounded-xl">
      <button className=' rounded-xl px-3 py-2 text-white  outline-none' style={{backgroundColor:"red"}}
      onClick={() => SetColor("red")}>
        Red
      </button>
      <button className=' rounded-xl px-3 py-2 text-white outline-none' style={{backgroundColor:"Blue"}} onClick={() => SetColor("blue")}>
        Blue
      </button>
      <button className=' rounded-xl px-3 py-2 text-white  outline-none' style={{backgroundColor:"green"}}
      onClick={() => SetColor("green")}>
        Green
      </button>
      <button className=' rounded-xl px-3 py-2 text-white  outline-none' style={{backgroundColor:"orange"}}
      onClick={() => SetColor("orange")}>
        Orange
      </button>
      <button className=' rounded-xl px-3 py-2 text-white outline-none' style={{backgroundColor:"pink"}}
      onClick={() => SetColor("pink")}>
        Pink
      </button>
      <button className=' rounded-xl px-3 py-2   outline-none' style={{backgroundColor:"yellow"}}
      onClick={() => SetColor("yellow")}>
        Yellow
      </button>
      <button className=' rounded-xl px-3 py-2 text-white  outline-none' style={{backgroundColor:"black"}}
      onClick={() => SetColor("black")}>
        Black
      </button>
      <button className=' rounded-xl px-3 py-2 text-white outline-none' style={{backgroundColor:"violet"}}
      onClick={() => SetColor("violet")}>
        voilet
      </button>
      <button className=' rounded-xl px-3 py-2 text-white  outline-none' style={{backgroundColor:"silver"}}
      onClick={() => SetColor("silver")}>
        silver
      </button>

      </div>

      </div>

    </div>
  )
}

export default App
