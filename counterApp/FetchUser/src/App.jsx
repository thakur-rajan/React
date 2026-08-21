import { useState,useEffect } from "react"

export default function App(){
  const [users,setUser]=useState([])
  // const [name,setName]=useState("")
  const[count,setCount]=useState(30)

  useEffect(()=>{
    async function githubUser(){
      const response=await fetch(`https://api.github.com/users?per_page=${count}`);
      const data=await response.json();
      setUser(data);
      console.log('hello');
    }
    githubUser();
  },[count])
  return(
    <>
     <h1>Github Users</h1>
     <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap", gap:"10px"}}>
      <input type="number" value={count} onChange={(e)=>setCount(e.target.value)} />
     {
      users.map(user=>(
        <img src={user.avatar_url} height={"200px"} width={"200px"} key={user.id}/>
      ))
     }

    </div>
    </>
  )
}