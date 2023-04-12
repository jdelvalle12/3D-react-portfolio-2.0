import React from 'react';
import Flick from '../images/Flick-Tracker.jpg';
import manifesto from '../images/manifesto.jpg';
import SEO from '../images/SEO.jpg';
import Journeez from '../images/Journeez.jpg';
import Fireworks from '../images/digital-fireworks.mp4';
import '../styles/Projects.css';

const Projects = () => {
  return (
    <div>
      <video src={Fireworks} autoPlay loop muted className="background-video"></video>

      <div>
        <h2 className='title'>Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <img src={Flick} alt="Flick-Tracker" />
            <h3><a href="https://flick-tracker.herokuapp.com/">Flick-Tracker</a></h3>
            <p>Description of Flick-Tracker</p>
          </div>
          <div className="project-card">
            <img src={manifesto} alt="manifesto" />
            <h3><a href="https://stickkman.github.io/gamblingManifesto-Proj01/">Manifesto</a></h3>
            <p>Description of Manifesto</p>
          </div>
          <div className="project-card">
            <img src={SEO} alt="SEO" />
            <h3><a href="https://jdelvalle12.github.io/horiseon-webpage/">SEO</a></h3>
            <p>Description of SEO</p>
          </div>
          <div className="project-card">
            <img src={Journeez} alt="Journeez" />
            <h3><a href="https://example.com/journeez">Journeez</a></h3>
            <p>Description of Journeez</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;