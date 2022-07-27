import React, { useState } from "react";
import "./contact.scss";
// import InfoIcon from '@material-ui/icons/Info';
const Contact = () => {
  const [message, setMessage] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/handShake.webp" alt="handShake" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span> Thanks for contacting me, I'll get back to you soon</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
