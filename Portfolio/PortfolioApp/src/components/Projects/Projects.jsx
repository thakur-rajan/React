import './Projects.css'
import Card  from '../Card/Card'
import va from '../../assets/va.png'
import fw from '../../assets/fw.png'
import cb from '../../assets/cb.png'
import tti from '../../assets/tti.png'
import ise from '../../assets/ise.png'
export default function Projects(){
    return(
        <>
         <div id="projects">
            <h1 id='hi'> I'm a Freasher Looking For Job... </h1>
            <div className="slider">
                {/* <Card img1={python} img2={Django} img3={Github} img4={SQL} heading="BackEnd" /> */}
                <Card heading="Virtual Assistant" img1={va} style={{width:"100%"  }} />
                <Card heading="Fittness Web" img1={fw} style={{width:"100%"  }}/>
                <Card heading="AI Chatbot" img1={cb} style={{width:"100%"  }}/>
                <Card heading="Text To Image" img1={tti} style={{width:"100%"  }}/>
                <Card heading="Image Search Engine" img1={ise} style={{width:"100%"  }}/>
            </div>
         </div>
        </>
    )
}