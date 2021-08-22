import React from ("react");
import emailjs from 'emailjs-com'


const ContactForm=()=>{

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail-val', 'template_eqj51bb', e.target, process.env.REACT_APP_POST_ID_NAME)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return(
        <form id="contact-form" onSubmit={sendEmail}>
          {/* <input type="hidden" name="name" /> */}
          <label>Subject</label>
          <input type="text" name="subject" />
          <br/>
          <label>Name</label>
          <input type="text" name="name"  />
          <br/>
          <label>Email</label>
          <input type="email" name="email" />
          <br/>          
          <label>Message</label>
          <textarea name="message"></textarea>
          <input type="submit" value="Send message" />
        </form>
    )
}

export default ContactForm;