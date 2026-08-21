import { useState } from "react"
import Product from "./Product"

export default  function Body(){

    const [item]=useState([
        {id:1,name:'Milk',price:100},
        {id:2,name:'Protein',price:10000},
        {id:3,name:'Coconut',price:50},
        {id:4,name:'Curd',price:100}
    ])
    console.log('body');
    return(
        <>
        <h1>Blinkit Body</h1>
        <div style={{display:"flex",gap:"50px"}}>
        {
            item.map((item)=><Product key={item.id} item={item}/>)
        }
        </div>
          
        </>
    )
}