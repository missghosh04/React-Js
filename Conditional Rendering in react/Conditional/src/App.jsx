import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[showbtn,setshowbtn]=useState(true)
  // creating state for todo 
  const [todos, settodos] = useState(
    [
      {
        title:"HEY",
        desc:"I am a good todo"
      },
      {
        title:"HEY I AM ANOTHER TODO",
        desc:"I am a good todo too"
      },
      {
        title:"hey i am a grocery todo",
        desc:"i am a good todo but grocery todo"
      }
    ]
  )
  // creating a component which name is Todo
  // type 1
//   const Todo=({todo})=>{
//     return(
//     <>
//      <div className="m-4 p-2.5 border-1">

//     <div className='todo'>{todo.title}</div>
//     <div className="todo">{todo.desc}</div>
    
//     </div>

//     </>
//   )
// }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* rendering the component using map method because we cant mutate the component directly  */}
      {todos.map( item=>{
        // type 1
        // return <Todo key={item.title} todo={item}/>
        // type 2
        return <div key={item.title} className="m-4 p-2.5 border-1">

    <div className='todo'>{item.title}</div>
    <div className="todo">{item.desc}</div>
    
    </div>
      })}
      {/* if you press enter after return it will be blank so nothing will be return */}
      {/* it always have to use unique key  */}
      <div className="card">
        {showbtn?<button >showbtn is true</button>:<button>showbtn is false</button>} 

        {/* {showbtn && <button >button will be seen when second button will be clicked </button> } */}

        <button onClick={() => setshowbtn(!showbtn)}>
          toggle showbtn
        </button>
      
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
