import { FC, useState } from "react";
import { IProduct } from "../productsTypes";


interface ProductsListProps{
    products:IProduct[],
    width:number
    height?:number
}


const ProductsList:FC<ProductsListProps> = ({products,width,height}) => {

const [ok,Setok] = useState(false)

    return (
       <div style={{width,height,display:"flex",justifyContent:'center',border:'3px solid black',marginLeft:60,gap:20}}>
        {products.map(product=>
        <div key={product.id}>
          <p>{product.id}</p>
          <img style={{width:100,height:100}} src={product.image} alt="fff" />
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <button onClick={()=>Setok(prev=>!prev)} style={{width:60,height:30}}>click</button>
          {ok && <h2>{product.price}</h2>}
        </div>)}
       </div>
    )
}


export default ProductsList