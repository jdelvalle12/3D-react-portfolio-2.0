import React from 'react';
import Me from '../images/Me.jpg';
import backgroundImage from '../images/Background.jpg';
import '../styles/About.css';
// import '../App.css';

export default function About() {
  return (
    <section className="aboutme-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
     <div> 
      <img src={Me} alt="Jose" className="profile-picture" />
        <h1 className="aboutme">Hello my name is Jose</h1>
        <div />
        <div className='description'>
          I am a full stack developer based in Orlando with experience in HTML5, CSS, variety of CSS framworks,
          JavaScript, jQuery, and have used Web, Third party & Server-side APIs on the front end 
          development. In addition, on the back end development, experience in MySQL, Node.js, 
          Express.js, REACT, GraphQL & MongoDB. Having an appetite for continuous learning, collaboration, 
          and problem-solving. I plan to create and maintain websites while also developing apps. Aside from 
          programming, I like listen to a variety of music, videogaming and travel around the world. 
        </div>
      </div>
    </section>
  );
}