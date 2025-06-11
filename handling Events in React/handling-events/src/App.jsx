import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const[name,setname]=useState("Soumi")
  const[form,setForm]=useState({})
  const handleclick=()=>{
    alert("hey i am clicked...")
  }
  const HandleMouseOver=()=>{
    alert("hey i am a mouse over")
  }
   const HandleChange=(e)=>{
    setForm({...form,[e.target.name]:e.target.value})
    console.log(form)
  }
  return (
    <>
      <div className="button">
        <button onClick={handleclick}>click me</button>
      </div>
      <div className="red" onMouseOver={HandleMouseOver}>
        hey i am red
      </div>
      <input type="text" name='email' value={form.email?form.email:""} onChange={HandleChange}/>
      <input type="text" name="phone" value={form.phone?form.phone:""} onChange={HandleChange}/>
    </>
  )
}

export default App
