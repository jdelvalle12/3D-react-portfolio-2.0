import React from 'react';
import backgroundImage from '../images/Background.jpg';
import '../styles/Home.css';
import '../App.css';

export default function Home() {
  return (
    <section className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='home-content'>    
      <h1>Home Page</h1>
      <p>
            My name is Jose, I am a full stack developer based in Orlando. I
            love all things technology, and I especially love working on programming. I like
            listen to 80s & 90s music, gaming and travel around the world. 
      </p>
    </div>
  </section>
  );
};
