import React from 'react';
import Me from '../images/Me.jpg';
import backgroundImage from '../images/Background.jpg';
import '../styles/About.css';
// import '../App.css';

export default function About() {
  return (
    <section className="aboutme-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      
      <div src={Me} alt="My picture" className="my-picture" >
        <h1 className="aboutme">Hello my name is Jose</h1>
        <div />
        <div className='description'>
          I am a full stack developer based in Orlando with experience in 
          HTML5, CSS, Bootstrap, JavaScript, jQuery, and using Web, Third party & server-side APIs & 
          on the back end, experience in MySQL, Node.js, Express.js, REACT, GraphQL & MongoDB. 
          Having an appetite for continuous learning, collaboration, and problem-solving, I plan to create 
          and maintain websites while also developing apps. I love all things technology, like listen to 
          a variety of music, videogaming and travel around the world. 
        </div>
      </div>
    </section>
  );
}