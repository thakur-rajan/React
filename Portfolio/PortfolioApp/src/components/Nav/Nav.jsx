import { useRef } from 'react'
import './Nav.css'
import {Link} from "react-scroll"
import {useGSAP} from '@gsap/react'
import gsap from 'gsap' 


export default function Nav(){

    const menu=useRef(null);
    const mobile=useRef(null)
    useGSAP(()=>{
       let t1=gsap.timeline()
       t1.from("nav h1",{
        y:-100,
        duration:1,
        opacity:0
       })
       t1.from("nav ul li",{
        y:-100,
        duration:0.5,
        opacity:0,
        stagger:0.1,
        
       })
       
    })
    return(
        <>
          <nav>
            <h1>Portfolio</h1>
            <ul className='desktopmenu'>
                <Link to='home' smooth={true} activeClass='active' spy={true} duration={500} ><li className='list'  >Home</li></Link>
                <Link to="about" spy={true} smooth={true} activeClass='active' duration={500} ><li className='list'  >About</li></Link>
                <Link  to="projects" spy={true} smooth={true} activeClass='active' duration={500} ><li className='list' >Projects</li></Link>
                <Link to="contact" spy={true} smooth={true} activeClass='active' duration={500} ><li  className='list' >Contact</li></Link>
            </ul>
              
             <div className="hamburger" ref={menu} onClick={()=>{
                mobile.current.classList.toggle('activemobile')
                menu.current.classList.toggle('activeham')
             }}>
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>   
             </div>

            <ul className='mobilemenu'ref={mobile} >
                <Link to='home' smooth={true} activeClass='active' spy={true} duration={500} ><li className='list'  >Home</li></Link>
                <Link to="about" spy={true} smooth={true} activeClass='active' duration={500} ><li className='list'  >About</li></Link>
                <Link  to="projects" spy={true} smooth={true} activeClass='active' duration={500} ><li className='list' >Projects</li></Link>
                <Link to="contact" spy={true} smooth={true} activeClass='active' duration={500} ><li  className='list' >Contact</li></Link>
            </ul>            
          </nav>
        </>
    )
}