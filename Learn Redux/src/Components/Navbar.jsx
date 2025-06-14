import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const Navbar = () => {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>
      Hi i am the navbar and count value is {count}
    </div>
  )
}

export default Navbar
