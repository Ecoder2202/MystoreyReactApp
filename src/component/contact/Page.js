import React, { useState } from "react";
import "./page.css";
import googleimg from '../image/google-img.png'
import emailjs from 'emailjs-com';




const Page = () => {
    const [sender_name, set_sender_name] = useState('')
    const [sender_email, set_sender_email] = useState('')
    const [sender_subject, set_sender_subject] = useState('')
    const [sender_message, set_sender_message] = useState('')
    const onSubmit = (d)=>{
        alert(JSON.stringify(d));
    }
const handleName = (e)=>{
set_sender_name(e.target.value)
}
const handleEmail = (e)=>{
    set_sender_email(e.target.value)
}
const handleSubject = (e)=>{
    set_sender_subject(e.target.value)
}
const handleMessage = (e)=>{
    set_sender_message(e.target.value)
}
const sendMail = (e)=>{
    e.preventDefault();
    emailjs.sendForm(
        'service_jty7cmk',
        'template_01efth3',
        {sender_name, sender_email, sender_subject, sender_message},
        'user_CXPiRRjdiDDEv5qUJ'
    )
    .then((Response) => {
console.log('Message sent successfully', Response.status, Response.text)
    })
    .catch((err)=>{
        console.log('failed', err)
    })
    e.target.reset();
}

  return (
   <>
   <div className="formbcontainer">
   <div className="formpagecon">
   <h1 className="contacttxt">Contact Us</h1>
   <form className="formcontainer" onSubmit={sendMail}>
   <div className="inputdivcon">
   <input className="nametxt" type='text' required placeholder='Full Name' name='sender_name' value={sender_name}  onChange={handleName}/>
   <input className="emailtxt" type='Email' required placeholder='Email Address' name='sender_email' value={sender_email} onChange={handleEmail}/>
   </div>
   <input className="subjecttxt" type='Subject' required placeholder=' your subject' name='sender_subject' value={sender_subject}  onChange={handleSubject}/>
   <div className="btncontainerform">
   <textarea className="mesagetxt" name="message" value={sender_message} required placeholder="your message"  onChange={handleMessage}/>
   <button className="btnkey" type='submit' onSubmit={onSubmit}>Submit</button>
   </div>
   </form>
   </div>
   <div className="mapcon">
    <a href="https://goo.gl/maps/9thGdNpEu5E6eWQa8" ><img className='googleimg' src ={googleimg} alt='' width='500' height='350'/></a>
   </div>
   </div>
    </>
  );
};

export default Page;
