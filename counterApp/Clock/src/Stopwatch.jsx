import { useRef, useState } from "react";

export default function Stopwatch(){
    const[time,setTime]=useState(0);
    let intervalIdRef=useRef(null);

    
    function handleStart(){
        if (intervalIdRef.current!=null){
            return;
        }
        intervalIdRef.current= setInterval(()=>{
            setTime(time=>time+1)
        },1000);
    }

    function handleStop(){
        clearInterval(intervalIdRef.current);
        intervalIdRef.current=null;
    }
    function handleReset(){
        clearInterval(intervalIdRef.current);
        intervalIdRef.current=null;
        setTime(0);
    }
    return(
        <>
        <h1>Stopwatch:{time}</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}