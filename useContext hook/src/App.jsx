import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { userContext } from './context'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <userContext.Provider value={{count,setCount}}>
      {/* when we are using this userContext .provider we are giving a value to the navbar and also in the inner component */}
      <Navbar/>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </userContext.Provider>
    </>
  )
}

export default App
