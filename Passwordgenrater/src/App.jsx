import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numbershow , setnumbershow] = useState(false)
  const [charactershow,setcharactershow] = useState(false)
  const [password , setpassword] = useState("")
  const Passwordref = useRef(null)

  const passwordGenrater = useCallback(()=>{
    let pass =" "
    let str ="ASDFGHJKLMNBVCXZQWERTYUIIOPabcdefghijklmnopqrstuvwxyz"
    if (numbershow) str += "01234567890"
    if (charactershow) str += "@#$%ZZ^Z&*()"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1 )

      pass += str.charAt(char)
    }
    setpassword(pass)

  },[length,numbershow,charactershow,setpassword])

  const passwordCopyClipboard = useCallback (() => {
    Passwordref.current?.select();
    Passwordref.current?.setSelectionRange(0,24);
    window.navigator.clipboard.writeText(password)
  },[password])

   useEffect(() => {
    // error is coming error is pass is not defined but it defind but  dn't understand why the error is coming
    passwordGenrater() 
   },[length, numbershow,charactershow,passwordGenrater])

  return (
    <>
    
    <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-300 bg-slate-700'>
      <h1 className='text-white text-center my-3'> Password generator</h1>
      <div className=' group relative flex justify-center shadow rounded-lg overflow-hidden mb-4 m-12 '>
        <input type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={Passwordref}/>
        {/* <button onClick={passwordCopyClipboard} className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0'> Copy
        </button> */}
        <button onClick={passwordCopyClipboard}  class="rounded bg-amber-500  text-white px-3 py-0.5 shrink-0  text-sm shadow-sm">Copy</button>
        <span class="absolute top-10 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">✨ try your luck!</span>
        
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
              setnumbershow((prev) => !prev);
            }}
           />
            <label>Number :{numbershow}</label> 
        </div>
        <div className='flex items-center gaap-x-1'>
            <input 
            type='checkbox'
            defaultChecked ={charactershow}
            id='numberInput'
            onChange={()=>{
              setcharactershow((prev) => !prev);
            }}
           />
            <label>Characters :{charactershow}</label> 
        </div>
      </div>


    </div>
    </>
  )
}

export default App
