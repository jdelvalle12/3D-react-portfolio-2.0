import React from 'react';
import Rotating from '../images/rotating-planet.mp4';
import '../styles/Contact.css';
import '../App.css';

export default function Contact() {
  return (
  <section>
  <video src={Rotating} autoPlay loop muted className="background-video"></video> 
    <div className='contact-container'>
      <h1 className='contact-title'>Contact</h1>
      <div className="design-inquiries">
        <h3 className='contact-header'>Design Inquiries:</h3>
        <form>
          <label className="text-right" htmlFor="name">Name:</label>
          <input type="text" id="name" name="user-name"/>
          <br />
          <label className="text-right" htmlFor="email">Email:</label>
          <input type="text" id="email" name="user-email"/>
          <br />
          <label className="text-right" htmlFor="message">Message:</label>
          <input type="text" id="message" name="user-message"/>
          <br />
          <div className="text-center">
            <button type="submit">SEND</button>
          </div>
        </form>
      </div>
    </div>
  </section> 
  );
}
