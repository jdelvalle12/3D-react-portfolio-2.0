import React from 'react';
import backgroundImage from '../images/Background.jpg';
import '../styles/Home.css';
import '../App.css';

 export default function Home() {
 
  return (
    <section className="home-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='home-content'>    
      <h1>Welcome...</h1>
      <p>
      “Design is not just what it looks like and feels like. Design is how it works.” –Steve Jobs
      </p>
    </div>
  </section>
  );
}

