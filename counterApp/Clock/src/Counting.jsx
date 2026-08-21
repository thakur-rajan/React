import { useState } from "react";
export default function Counting(props){
    const [count,setCount]=useState(0)
    return(
        <>
        <div>
         <h1 >Clock:{props.name}</h1>
         <h2>Count:{count}</h2>
         <button onClick={()=>setCount(count+1)}>Increament</button>

        </div>
        </>
    )
}