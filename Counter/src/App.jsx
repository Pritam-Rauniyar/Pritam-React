import { useState } from 'react'
import Counter from './assets/Components/Counter/Counter'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
       
    </>
  )
}

export default App
