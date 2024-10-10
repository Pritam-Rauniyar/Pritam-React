import { useState } from 'react'
import React from 'react'


const Counter = () => {
    let [counter, setCounter] = useState(0)

    const valuePlus = () => {
       if (counter < 20) {
        counter = counter + 1;
        setCounter(counter)
       }else if (counter === 20) {
        alert("It's maximium number")
       }
    }
    const valueDown = () => {
        if (counter > 0) {
         counter = counter - 1;
         setCounter(counter)
        }else if (counter === 0) {
         alert("You go down zero")
        }
     }

    
  return (
    <>
    <div className='bg-zinc-500 shadow-lg shadow-zinc-300 text-black text-[30px] grid justify-center p-2'>
    <h1 className='uppercase font-serif font-bold'>counter app done by Pritam Rauniyar</h1>
    <div className='w-full shadow-xl  shadow-zinc-300 flex justify-center items-center uppercase gap-4 font-bold'>
        <h4 className='shadow-inner shadow-zinc-300 rounded-full p-2'>Counter</h4>
        <h4 className='shadow-inner shadow-zinc-300 rounded-full p-2'> {counter} </h4>
    </div>
    <div className='flex gap-6 justify-center mt-5'>
        <button className='bg-zinc-800 rounded-full p-2 text-zinc-50 font-semibold' onClick={valuePlus}>Start</button>
        <button className='bg-zinc-800 rounded-full p-2 text-zinc-50 font-semibold' onClick={valueDown}> Stop</button>

    </div>
    </div>


    </>
    )
}

export default Counter