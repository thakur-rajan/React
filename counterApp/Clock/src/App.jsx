import { useEffect } from "react";
import { useState } from "react";
import './App.css'
export default function App(){
  const [time,setTime]=useState(new Date().toLocaleTimeString());
  const [show,setShow]=useState(true)
  useEffect(()=>{
    if(!show)
      return
    const setIntevalId= setInterval(()=>{
      setTime(new Date().toLocaleTimeString())
      console.log('hello')
    },1000)

    return()=>{
       clearInterval(setIntevalId)    
    }
    
  },[show])
  return(
    <>
    <button className="button" onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button>
    {
      show&&<h1>Current Time:{time}</h1>
    }
    </>
  )
}