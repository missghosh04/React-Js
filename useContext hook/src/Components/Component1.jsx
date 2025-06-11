
import {React,useContext} from 'react'
import { userContext } from '../context'

const component1 = () => {
    const value=useContext(userContext);
  return (
    <div>
        {value.count}
    </div>
  )
}

export default component1
