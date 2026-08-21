import { useContext } from "react"
import { ItemContext } from "../context/Context"

export default function Cart(){


    const {cartItem}=useContext(ItemContext);
        console.log('cary');

    return(
        <>
          <h1>Total item:{cartItem} </h1>
        </>
    )
}