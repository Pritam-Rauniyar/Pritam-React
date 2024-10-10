
import React, {useState} from 'react'

const Bgchanger = () => {
    const [color, setColor] = useState("black")

  return (
    <>
      <div className='w-full h-screen flex gap-3 justify-center p-1 mt-3 font-serif text-white' style={{backgroundColor:color}}>
        <button className='w-5 h-5 bg-[#8fc2f4] shadow-2xl shadow-zinc-900 rounded-full ' onClick= {() => {setColor("#8fc2f4")}}></button>
        <button className='w-5 h-5 shadow-2xl shadow-zinc-900 bg-[#000] rounded-full' onClick= {() => {setColor("#000")}}></button>
        <button className='w-5 h-5 bg-[#CD8C95] shadow-2xl shadow-zinc-900 rounded-full ' onClick= {() => {setColor("#CD8C95")}}></button>
        <button className='w-5 h-5  shadow-2xl shadow-zinc-900 bg-[#8B8386] rounded-full' onClick= {() => {setColor("#8B8386")}} ></button>
        <button className='w-5 h-5 bg-[#42e719] shadow-2xl shadow-zinc-900 rounded-full ' onClick= {() => {setColor("#42e719")}}></button>
        <button className='w-5 h-5 bg-[#FF1493] shadow-2xl shadow-zinc-900 rounded-full ' onClick= {() => {setColor("#FF1493")}}></button>
        <button className='w-5 h-5 bg-[#e4a493] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#06102d] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#d45a49] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#cd4309] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#830a8e] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#3e6a56] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#8fc2f4] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#941906] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#eeae31] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#9400D3] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#4B0082] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#00008B] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#00EE76] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#006400] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#EE9A49] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#D2691E] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#8B1A1A] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#8B0000] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#C67171] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#BABABA] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#A8A8A8] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#787878] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#383838] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#030303] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#FCFCFC] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#FF7D40] shadow-2xl shadow-zinc-900 rounded-full '></button>
        <button className='w-5 h-5 bg-[#8B4513] shadow-2xl shadow-zinc-900 rounded-full '></button>        
      </div>
      <div className=' mt-10'>
        <p>You can change the background of the page using hooks in react javascript.</p>
      </div>
    </>
  )
}

export default Bgchanger