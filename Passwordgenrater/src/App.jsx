import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numbershow , setnumbershow] = useState(false)
  const [charactershow,setcharactershow] = useState(false)
  const [password , setpassword] = useState("")
  const passwordgenrater = useCallback(()=>{
    pass =""
    str ="ASDFGHJKLMNBVCXZQWERTYUIIOP"
    if (numbershow) str += "1234567890"
    if (charactershow) str += "@#$%ZZ^Z&*()"
    for (let i = 0; i < array.length; i++) {
      let char = Math.floor(Math.random() * str.length +1 )
      pass = str.charAt(char)
    }
    setpassword(pass)

  },[length,numbershow,charactershow,setpassword,])

  return (
    <>
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-300 bg-slate-700'>
      <h1 className='text-white text-center my-3'> Password generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        />
        <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'> Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type='range'
          min={8}
          max={24}
          value={length}
          className=' cursor-pointer'
           onChange={(e) => {setlength(e.target.value)}}/>
          <label>Length :{length}</label>
        </div>
        <div className='flex items-center gaap-x-1'>
            <input 
            type='checkbox'
            defaultChecked ={numbershow}
            id='numberInput'
            onChange={()=>{
              setnumbershow((prev)=>!prev);
            }}
           />
            <label>Number :{numbershow}</label> 
        </div>
      </div>

      <div>

      </div>


    </div>
    </>
  )
}

export default App
