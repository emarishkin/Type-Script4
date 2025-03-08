import { FC } from "react";
import { IUser } from "../types";


interface UserListProps{
    users:IUser[]
}


const UserList:FC<UserListProps> = ({users}) => {
    return(

    <div>
        {users.map(user=><div key={user.id}>
         {user.id}.{user.name}{user.fullname},возраст {user.age} проживающий по адресу: город: {user.adress.city}, улица: {user.adress.street}, дом: {user.adress.house}
    </div>)}
        </div>
        // <div>
        // {user.id}. {user.name}{user.fullname},возраст {user.age} проживающий по адресу: город: {user.adress.city}, улица: {user.adress.street}, дом: {user.adress.house}
        // </div>
    )
}

export default UserList