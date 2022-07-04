import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import {  useRef, useState } from "react";
import emailjs from '@emailjs/browser';;

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const [state ,setState] =useState(false)
  


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n1ts4kt",
        "template_19zc3ce",
        formRef.current,
        "V14q20day0sMULIbU"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const toggle =()=>{
    setState(true);

  }

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Lets Discuss More.. </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 939 0288 625
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              sathishsuperior.4659@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              18/245 samalkot , East Godavari Andhra Pradesh
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b></b> 
            
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input  type="text" placeholder="Name" name="user_name" />
            <input  type="text" placeholder="Subject" name="user_subject" />
            <input  type="text" placeholder="Email" name="user_email" />
            <textarea  rows="5" placeholder="Message" name="message" />
            <button onClick={toggle} className='c-btn'>{state ? 'Sent' : 'Submit'} </button>
            {done && "  Thank You..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
