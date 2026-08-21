import { useRef } from "react"

export default function Video(){
    const videoRef=useRef(null);
    function handleStart(){
         videoRef.current.play();
    }
    function handleStop(){
        videoRef.current.pause();
    }
    function handleRestart(){
        videoRef.current.currentTime=0;
       
    }
    function handleBackward(){
        videoRef.current.currentTime-=10
    }

    function handleForward(){
        videoRef.current.currentTime+=10
    }
    
    return(
        <>
        <div>
          <video ref={videoRef} src="./vidssave.com Ganga Ke Kinare _ Bunny _ Sagar _ Kripa Record 1080P.mp4" width="400px"controls></video>
        </div>
         <button onClick={handleStart} >Start</button>
         <button onClick={handleStop}>pause</button>
         <button onClick={handleRestart}>0</button>
         <button onClick={handleBackward}>-10</button>
         <button onClick={handleForward}>+10</button>

        </>
    )
}