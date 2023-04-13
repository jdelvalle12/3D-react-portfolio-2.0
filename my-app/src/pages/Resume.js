import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, 
  faCss3, 
  faJs, 
  faReact,
  faGithub,
  faNodeJs,
  faBootstrap,
} from '@fortawesome/free-brands-svg-icons';
import Abstract from '../images/abstract-structure.mp4';
import '../styles/Resume.css';

export default function Resume() {
    return (
      <div className='resume-container'>
      <video src={Abstract} autoPlay loop muted className="background-video"></video>
      {/* Resume Card */}
      <div className='resume-card'>
        <h1 className='resume-title'>Resume</h1>
        <p>
          A Full Stack Developer with an array of tech skills from the front end to back end such as Express.js, MySQL, GraphSQL,
          in addition to the tech skills below. I'm detail-oriented Hardworking innovative problem-solver who is passionate about
          developing apps with a focus on design and development. Strengths in critical thinking, analytical, creativity, teamwork,
          organizational & time management skills.
        </p>
        <ul>
          <h4>Technical Skills:</h4>
          <FontAwesomeIcon icon={faHtml5} /> {/* HTML5 */}
          <FontAwesomeIcon icon={faCss3} /> {/* CSS3 */}
          <FontAwesomeIcon icon={faJs} /> {/* JavaScript */}
          <FontAwesomeIcon icon={faReact} /> {/* React */}
          <FontAwesomeIcon icon={faGithub} /> {/* GitHub */}
          <FontAwesomeIcon icon={faNodeJs} /> {/* Node.js */}
          <FontAwesomeIcon icon={faBootstrap} /> {/* Bootstrap */}
        </ul>
        </div>        
      </div>
    );
  }