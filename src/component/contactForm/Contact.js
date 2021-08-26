import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navigation from "../navigation/navigation";
import "./contact.scss";
import Input from "./Input/Input";

const ContactForm = () => {
  const [valueState, setValueState] = useState({
    subj: "",
    nameSender: "",
    emailAdress: "",
    message: "",
  });

  function sendEmail(e) {
    e.preventDefault();

    setValueState(valueState, (valueState.subj = e.target.subject.value));
    setValueState(valueState, (valueState.nameSender = e.target.name.value));
    setValueState(valueState, (valueState.emailAdress = e.target.email.value));
    setValueState(valueState, (valueState.message = e.target.message.value));

    console.log(valueState);
    if (valueState.nameSender && valueState.emailAdress && valueState.message) {
      emailjs
        .sendForm(
          "gmail-val",
          "template_eqj51bb",
          e.target,
          process.env.REACT_APP_POST_ID_NAME
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
        alert('Your message has been sent, Thank you!')
    } else {
      alert("Please fill the form");
    }
  }

  return (
    <div className="Contact">
      <Navigation />
      <div className="info">
          <p className='bg-text' unselectable='on'>{`<contact-info>`}</p>
          <p className='bg-text'>{`<p>`}</p>
        <p>
          Valentin Kolko, <br />
          Front-End developer <br />
          Belarus, Minsk <br />
          <a href="mailto: valiant9191@gmail.com">valiant9191@gmail.com</a>
          <br />
          phone : <a href="tel: +375 (29) 359 32 15 ">+375 293593215</a>
        </p>
        <p className='bg-text '>{`  </ p>`}</p>

        <p className='bg-text '>{`</ contact-info>`}</p>
        
      </div>
      
      <form id="contact-form" onSubmit={sendEmail}>
      <p className='bg-text '>{`< p>`}</p>
        <p>
          If you have any request or question, don’t hesitate to use the form.
        </p>
        <p className='bg-text '>{`</ p>`}</p>
        <p className='bg-text '>{`  <form>`}</p>
        <Input
          placeholderInput="Subject"
          typeInput="text"
          nameInput="subject"
        />
        <br /> <br />
        <Input placeholderInput="Your name" typeInput="text" nameInput="name" />
        <br /> <br />
        <Input placeholderInput="e-mail" typeInput="email" nameInput="email" />
        <br />
        <br />
        <textarea
          className="textarea-input"
          name="message"
          placeholder="Message"
        ></textarea>
        <br />
        <p className='bg-text '>{`</ form>`}</p>
        <p className='bg-text '>{`<submit>`}</p>
        <input className="submit-input" type="submit" value="Send message" />
        <p className='bg-text '>{`</ submit>`}</p>
        
      </form>
    </div>
  );
};

export default ContactForm;
