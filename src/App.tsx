import {useState } from "react"
import Card from "./components/Card"
import UserList from "./components/UserList"
import { users } from "./users"
import ProductsList from "./components/ProductsList"
import { products } from "./products"
import TodoList from "./components/TodoList"
import { todos } from "./todosM"


function App() {
  const [click,setClick] = useState(false)
  // const [users,setUsers] = useState<IUser[]>([])

// useEffect(()=>{
//   fetchUsers()
// },[])


// async function fetchUsers(){
//   try{
//     const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//     setUsers(response.data)
//   } catch(e){
//      alert(e)
//   }
// }


  return (
    <>
     <Card fontSize={30} width={100} height={100}><p style={{margin:'0 20px'}}>click</p>
     <button onClick={()=>setClick(prev=>!prev)} style={{margin:'0 30px'}}>
       click
     </button>
     </Card>


     {click && <div><UserList users={users}/></div>}
     {click && <div><ProductsList width={600} height={500} products={products}/></div>}

     <div>
      <TodoList todos={todos} />
     </div>
    
     
     
    </>
  )
}

export default App
