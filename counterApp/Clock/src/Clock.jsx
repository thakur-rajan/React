import { useState } from "react";
import Counting from "./Counting";
export default function Clock(){
    const [clocks,setClock]=useState(['B','C','D']);

    return(
        <>
         <div>
            
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"20px", flexWrap:"wrap"}}>
            <button onClick={()=>setClock(['A','B','C','D'])}>Increament Clock</button>
                {
                    clocks.map((clock)=><Counting  name={clock} key={clock}></Counting>)
                }
            </div>
         </div>
        </>
    )
}