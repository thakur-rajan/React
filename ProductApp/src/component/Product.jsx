import { useContext, useState } from "react"
import { ItemContext } from "../context/Context";

export default function Product({item}){
     const {cartItem,setCartItem}=useContext(ItemContext)
     const [addCart,setAddcart]=useState(false);
         console.log('product');

    return(

        <>
         <div>
          <h2>Name: {item.name} </h2>
          <h3>Price: {item.price} </h3>
          {
            addCart ? <button onClick={()=>{setAddcart(false), setCartItem(cartItem-1)}}>Remove</button> : <button onClick={()=>{setAddcart(true), setCartItem(cartItem+1)}}>Add</button>
          }
          </div>
        </>
    )
}