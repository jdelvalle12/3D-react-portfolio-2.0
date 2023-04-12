import React from 'react';
import '../styles/Contact.css';

export default function Contact() {
  return (
    <div className='contact-container'>
      <h1>Contact Page</h1>
      <div class="design-inquiries">
      <h3>Design Inquiries:</h3>
      <form>
        <ul>
          <li>
            <label class="text-right" for="name">Name:</label>
            <input type="text" id="name" name="user-name"/>
          </li>
          <li>
            <label class="text-right" for="email">Email:</label>
            <input type="text" id="email" name="user-email"/>
          </li>
          <li>
            <label class="text-right" for="message">Message:</label>
            <input type="text" id="message" name="user-message"/>
          </li>
        </ul>
        <div class="text-center">
          <button type="submit">SEND</button>
        </div>
      </form>
    </div>
    </div>
  );
}
