import './Contact.css'
import contact from '../../assets/contact.png'
export default function Contact(){
     
    return (
        <>
          <div id="contact">
            <div className="leftcontact">
                 <img src={contact} alt="" />
            </div>
            <div className="rightcontact">
                <form action="#">
                    <input type="text" name='name' placeholder='Name' />
                    <input type="email" name='email' placeholder='Email' />
                    <textarea name="messagw" id="textarea" placeholder='Message...'></textarea>
                    <input type="submit" value="Submit" id="btn" />
                </form>
            </div>
          </div>
        </>
    )
}