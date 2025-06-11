import React, { useEffect } from 'react'

const Navbar = ({color}) => {
  // case 1: I will run on every render
  useEffect(() => {
  alert("i WILL RUN ON EVERY RENDER")
  
  })
  // case 2:run on first render
  useEffect(() => {
    alert("i was running because first render")
  }, [])
  // case 3:i am running because some prperty was changed
  useEffect(() => {
    alert("color was changed")
  }, [color])
  // case 4:when we need to cleanup any component and need something happend we use return 
  useEffect(() => {
   alert("we are using this funtion for clean up")
  
    return () => {
      alert("the component was unmounteed")
    }
  }, [])
  
  return (
    <div>
      hehe i am a navbar my color is {color}
    </div>
  )
}

export default Navbar
