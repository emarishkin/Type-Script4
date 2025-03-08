export interface IUser{
    id:number
    name:string
    fullname:string
    age:number
    adress:IAdress
}

interface IAdress{
    city:string
    street:string
    house:number
}