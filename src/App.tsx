import { useState } from "react"
import Card from "./components/Card"
import UserList from "./components/UserList"
import {users} from './users'

function App() {
  const [click,setClick] = useState(false)
  return (
    <>
     <Card fontSize={30} width={100} height={100}><p style={{margin:'0 20px'}}>click</p>
     <button onClick={()=>setClick(prev=>!prev)} style={{margin:'0 30px'}}>
       click
     </button>
     </Card>
     
     {click && <div><UserList users={users}/></div>}
     
     
     
    </>
  )
}

export default App
