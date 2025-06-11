
import './App.css'
import Navbar from './Components/Navbar'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import About from './Components/About'
import User from './Components/User'
function App() {
 const Router=createBrowserRouter([
  {
    path:"/",
    element:<><Navbar/><Home/></>
  },
  {
    path:"/login",
    element:<><Navbar/><Login/></>
  },
  {
    path:"/about",
    element:<><Navbar/><About/></>
  },
   {
    path:"/user/:username",
    element:<><Navbar/><User/></>
  },
 ])
  return (
    <>
      <RouterProvider router={Router}/>
    </>
  )
}

export default App
