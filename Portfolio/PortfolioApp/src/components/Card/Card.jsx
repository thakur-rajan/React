import './Card.css'
// import mern from '../../assets/mern.png'
// import html from '../../assets/html.png'
// import css from '../../assets/css.png'
// import react from '../../assets/react.svg'
export default function Card(props){
    return(
        <>
         <div className="card">
               <h1>{props.heading }</h1>
            <div className="hovercard">
                <img style={props.style} src={props.img1} alt="" />
                <img style={props.style} src={props.img2} alt="" />
                <img style={props.style} src={props.img4} alt="" />
                <img style={props.style} src={props.img3} alt="" />
            </div>
            
         </div>
         
        </>
    )
}