import { FC } from "react"


interface cardProps{
    fontSize:number
    width:number
    height:number
    children:React.ReactNode
}


const Card:FC<cardProps> = ({fontSize,width,height,children}) => {
return(
    <div style={{fontSize,width,height,border:'3px solid black'}}>
        {children}
    </div>
)
}

export default Card