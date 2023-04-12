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
              <div className="project-card-overlay">
                <h3><a href="https://flick-tracker.herokuapp.com/">Flick-Tracker</a></h3>
              </div>
                
              </div>
              <div className="project-card">
                <img src={manifesto} alt="manifesto" />
                  <div className="project-card-overlay">
                  <h3><a href="https://stickkman.github.io/gamblingManifesto-Proj01/">Manifesto</a></h3>
              </div>
                
              </div>
              <div className="project-card">
                <img src={SEO} alt="SEO" />
              <div className="project-card-overlay">
                  <h3><a href="https://jdelvalle12.github.io/horiseon-webpage/">SEO</a></h3>
              </div>
                
              </div>
              <div className="project-card">
                <img src={Journeez} alt="Journeez" />
              <div className="project-card-overlay">
                  <h3><a href="https://example.com/journeez">Journeez</a></h3>
              </div>
                
              </div>
            </div>
          </div>
        </div>
      );
    }

export default Projects;