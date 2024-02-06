import { useState } from "react"
import Colorbtn from "./Colorbtn"

function App() {
 const [Color , SetColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: Color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 "> 
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">btn

      </div>

      </div>

    </div>
  )
}

export default App
