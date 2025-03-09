import {FC} from "react";
import { ITodos } from "../todos";


interface TodoListProps{
    todos:ITodos[]
}

const TodoList:FC<TodoListProps> = ({todos}) => {
    return (
        <div>

            {todos.map((todo)=>
            <div>
             <input type="checkbox" checked={todo.completed} />
             {todo.id} 
             {todo.title}
            </div>)}
          
        </div>
    )
}

export default TodoList