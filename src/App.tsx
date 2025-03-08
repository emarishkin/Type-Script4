import Card from "./components/Card"
import UserList from "./components/UserList"
import {users} from './users'

function App() {
  return (
    <>
     <Card fontSize={30} width={100} height={100}><p style={{margin:'0 20px'}}>click</p>
     <button style={{margin:'0 30px'}}>
       click
     </button>
     
     </Card>
     <UserList users={users}/>
    </>
  )
}

export default App
