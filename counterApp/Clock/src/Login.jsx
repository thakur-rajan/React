import { useRef } from "react"
import "./login.css"
export default function Login(){
    // const [email,setEmail]
    const emailRef=useRef(null);
    const passwordRef=useRef(null);

    console.log('render')
    function handleSubmit(e){
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
        e.preventDefault()
    }
    return(
        <>
         <div className="login">
            <form action="">
                <input type="email" ref={emailRef} />
                <input type="password" ref={passwordRef} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
         </div>
        </>
    )
}