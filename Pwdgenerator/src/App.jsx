import { useState, useCallback, useEffect, useRef } from 'react'
function App() {
  const [pwd, setPwd] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)
  const pwdGenerator = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (specialCharAllowed) str += "!@#$%^&*()+=?.,;<=>?@[]{}>~"
    for (let i = 1; i <= pwd; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
   }, [pwd, numAllowed, specialCharAllowed, setPassword]);
   
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    pwdGenerator()
  },[pwd, numAllowed, specialCharAllowed, pwdGenerator])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-lg bg-gray-700 rounded-lg px-4 py-3 my-8 text-orange-500 text-lg text-center ">
      <h1 className='text-white text-center my-3'> Password Generator By Pritam Rauniyar</h1>
      <div className='flex rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password} 
        className='outline-none w-full py-1 px-3 '
        placeholder='password' 
        readOnly
        ref={passwordRef}
        />
        <button 
        // onClick={pwdGenerator} 
        className='bg-orange-500 hover:bg-orange-400 text-white font-bold py-0.5 px-3 shrink-0'
        onClick={copyPasswordToClipboard}
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className="flex items-center gap-x-1">
          <input type="range"
          min={6} 
          max={100}            
          value={pwd}
          className='cursor-pointer'
          onChange={(e) => {setPwd(e.target.value);}}
          />
          <label>Length: {pwd}</label>
        </div>
        <div className='flex items-center gap-x-1 '>
          <input type="checkbox" 
          defaultChecked= {numAllowed} 
          id='numInput'
          onChange={() => {
            setNumAllowed((prev) => (!prev));
          }}
          />
          <label> Number</label>
        </div>
        <div className='flex items-center gap-x-1 '>
          <input type="checkbox" 
          defaultChecked= {specialCharAllowed} 
          id='numInput'
          onChange={() => {
            setSpecialCharAllowed((prev) => (!prev));
          }}
          />
          <label>Spcl character</label>
        </div>
      </div>
    </div>
  
   </>
  )
}

export default App
