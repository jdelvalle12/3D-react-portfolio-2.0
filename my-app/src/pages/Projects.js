import Flick from '../images/Flick-Tracker.jpg';
import manifesto from '../images/manifesto.jpg';
import SEO from '../images/SEO.jpg';
import Journeez from '../images/Journeez.jpg';
import Fireworks from '../images/digital-fireworks.mp4';
import '../styles/Projects.css';
// import as many images as you need

const Projects = () => {
  return (
    // <section className='projects-container'>
    <div>
    <video src={Fireworks} autoPlay loop muted className="background-video"></video>
    
    <div>
  <h2>Projects</h2>
  <div className="project-container">
    <div className="project-card">
      <div src={Flick} alt="Flick-Tracker" />
      <h3><a href="https://flick-tracker.herokuapp.com/">Flick-Tracker</a></h3>
      <p>Description of Flick-Tracker</p>
    </div>
    <div className="project-card">
      <div src={manifesto} alt="manifesto" />
      <h3><a href="https://stickkman.github.io/gamblingManifesto-Proj01/">manifesto</a></h3>
      <p>Description of manifesto</p>
    </div>
    <div className="project-card">
      <div src={SEO} alt="SEO" />
      <h3><a href="https://jdelvalle12.github.io/horiseon-webpage/">SEO</a></h3>
      <p>Description of SEO</p>
    </div>
    <div className="project-card">
      <div src={Journeez} alt="Journeez" />
      <h3><a href="https://example.com/journeez">Journeez</a></h3>
      <p>Description of Journeez</p>
    </div>
  </div>
</div>
</div>
    );
}

export default Projects;