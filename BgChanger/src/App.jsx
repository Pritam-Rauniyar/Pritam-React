import { useState } from 'react'
import Bgchanger from './assets/Componets/Bgchanger/Bgchanger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Bgchanger />
    </>
  )
}

export default App
