import { useContext } from 'react'
import React from 'react'
import Component1 from './Component1'
import { userContext } from '../context'

const Button = () => {
  const value=useContext(userContext)
  return (
    <div>
      <button onClick={() => value.setCount((count) => count + 1)}>click me <Component1/> </button>
      
    </div>
  )
}

export default Button
