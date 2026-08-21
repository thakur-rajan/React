import './About.css'
import Card from '../Card/Card'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import react from '../../assets/react.svg'
import python from '../../assets/python.png'
import Django from '../../assets/Django.png'
import SQL from '../../assets/SQL.png'
import Github from '../../assets/Github.png'
// import { useGSAP} from '@gsap/react'
// import gsap from 'gsap'
// import { ScrollTrigger} from 'gsap/all'
// gsap.registerPlugin(ScrollTrigger)

export default function About(){
    // useGSAP(()=>{
    //     gsap.from(".circle",{
    //         x:-100,
    //         duration:1,
    //         opacity:0,
    //         ScrollTrigger:{
    //             trigger:".circle",
    //             scroll:"body",
    //             scrub:2,
    //             // markers:true,
    //             // start:"top 50%",
    //             // end:"top 50%"

                
    //         }
    //     })
    //     gsap.from(".aboutdetails",{
    //         x:-100,
    //         duration:1,
    //         opacity:0,
    //         ScrollTrigger:{
    //             trigger:".circle",
    //             scroll:"body",
    //             scrub:2,
    //             markers:true,
    //             start:"top 50%",
    //             end:"top 50%"

                
    //         }
    //     })
    // })
    return(
        <>
          <div id="about">
            <div className="leftabout">
                 <div className="circleline">
                    <div className="circle"></div>
                    <div className="line"></div>
                    <div className="circle"></div>
                    <div className="line"></div>
                    <div className="circle"></div> 
                    <div className="line"></div>    
                    <div className="circle"></div>               
                 </div>
                 <div className="aboutdetails">
                    <div className="personaldetail">
                        <h1>Personal Info</h1>
                        <ul>
                            <li><span>Name</span> : Rajan Thakur</li>
                            <li><span>Age</span> : 24</li>
                            <li><span>Gender</span> : Male</li>
                            <li><span>Language</span> : Hindi & English</li>
                        </ul>
                    </div>
                    <div className="education">
                        <h1>Education</h1>
                        <ul>
                            <li><span>Degree</span> : BCA </li>
                            <li><span>Collage</span> : J.S University </li>
                            <li><span>CGPA</span> : 7.96 </li>
                        </ul>
                    </div>
                    <div className="skills">
                        <h1>Skills</h1>
                        <h3>FrontEnd</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JS</li>
                            <li>REACT</li>
                        </ul>
                        <h3>BackEnd</h3>
                        <ul>
                            <li><span>Language</span> : Python</li>
                            <li><span>FrameWork</span> : Django,DjangoREST & FastAPI</li>
                            <li><span>Database</span> : SQL</li>
                            <li><span>Tools</span> : Git,GitHub,Postman,Docker</li>
                        </ul>
                    </div>
                 </div>
            </div>
            <div className="rightabout">
                <Card img1={html} img2={css} img3={react} img4="https://img.icons8.com/?size=50&id=42769&format=png" heading="FrontEnd" style={{width:"25%"}} />
                <Card img1={python} img2={Django} img3={Github} img4={SQL} heading="BackEnd" style={{width:"25%"}} />
            </div>
          </div>
        </>
    )
}