import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Nums = new Array(30_000_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 25_000_000,
  }
})
// creting an array 30 million numbers filling with 0 also thre is map function which returning objects one is index and another one is is magical
function App() {
  const [count, setCount] = useState(0)
  const [number, setnumber] = useState(Nums)
  // const magical=Nums.find(item=>item.isMagical===true)  //Excessive Computation
  // finding the number where is magical is true
  const magical = useMemo(() => number.find(item => item.isMagical === true), [number])
  //  useMemo(() => first, [second])
  return (
    <>
      <div>
        <span>Magical number is {magical.index}</span>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() =>{
        setCount((count) => count + 1);
        if(count == 10) {
          setnumber(new Array(95_000_000).fill(0).map((_, i) => {
            return {
              index: i,
              isMagical: i ===90_000_000,
            }
          }))
        }
        }}
        >
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test HMR
      </p>
    </div >
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
