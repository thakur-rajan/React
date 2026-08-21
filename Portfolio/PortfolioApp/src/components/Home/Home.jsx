import './Home.css'
import man from '../../assets/man.png'
import { TypeAnimation } from 'react-type-animation';
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

export default function Home(){
    // useGSAP(()=>{
    //   const t1=gsap.timeline()
    //   t1.from(".line1",{
    //     y:80,
    //     duration:0.5,
    //     opacity:0
    //   })
    //   t1.from(".line2",{
    //     y:80,
    //     duration:0.5,
    //     opacity:0
    //   })
    //   t1.from(".line3",{
    //     y:80,
    //     duration:0.5,
    //     opacity:0
    //   })
    //   // t1.from(".homedetail button",{
    //   //   y:100,
    //   //   duration:0.5,
    //   //   opacity:100,
        
    //   //  })
    //   gsap.from(".righthome img",{
    //     x:100,
    //     duration:1,
    //     opacity:0
    //   })
    // })
    return (
        <>
         <div id="home">
              <div className="lefthome">
                <div className="homedetail">
                    <div className="line1">I'M </div>
                    <div className="line2">RAJAN THAKUR</div>
                    <div className="line3">
                      <TypeAnimation
                        sequence={[
                          'Python Backend Developer',
                          1000,
                          'Frontend Developer',
                          1000,
                        ]}
                        
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                       />
                    </div>
                    <button>Hire me</button>
                </div>
              </div>
              <div className="righthome">
                 <img src={man} alt="" />
                 
              </div>
         </div>
        </>
    )
}