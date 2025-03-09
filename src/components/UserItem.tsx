import { FC } from "react";
import { IUser } from "../types";

interface UserItemProps{
    user:IUser
}

const UserItem:FC<UserItemProps> = ({user}) => {
    return (
        
        <div>
         {user.id}.{user.name}{user.fullname},возраст {user.age} проживающий по адресу: город: {user.adress.city}, улица: {user.adress.street}, дом: {user.adress.house}
         </div>
        
    )
}

export default UserItem