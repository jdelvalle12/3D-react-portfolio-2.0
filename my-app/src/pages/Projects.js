import Flick from '../images/Flick-Tracker.jpg';
import manifesto from '../images/manifesto.jpg';
import SEO from '../images/SEO.jpg';
import Journeez from '../images/Journeez.jpg'
// import as many images as you need

const Projects = () => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="project-container">
        <div className="project-card">
          <img src={Flick} alt="Flick-Tracker" />
          <h3>Flick-Tracker</h3>
          <p>Description of Flick-Tracker</p>
        </div>
        <div className="project-card">
          <img src={manifesto} alt="manifesto" />
          <h3>manifesto</h3>
          <p>Description of manifesto</p>
        </div>
        <div className="project-card">
          <img src={SEO} alt="SEO" />
          <h3>SEO</h3>
          <p>Description of SEO</p>
        </div>
        <div className="project-card">
          <img src={Journeez} alt="Journeez" />
          <h3>Journeez</h3>
          <p>Description of Journeez</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;