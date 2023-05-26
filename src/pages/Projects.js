import React from 'react';
import Image from 'react-bootstrap/Image';
import Flick from '../images/Flick-Tracker.jpg';
import manifesto from '../images/manifesto.jpg';
import SEO from '../images/SEO.jpg';
import Journeez from '../images/Journeez.jpg';
import Weather from '../images/weather-forecast.jpg';
import Planner from '../images/day-planner.jpg';
import Notepad from '../images/notepad.jpg';
import Winery from '../images/Winery.jpg';
import Fireworks from '../images/digital-fireworks.mp4';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Projects.css';
import '../App.css';


const Carousel = () => {
  const projects = [
    { image: Flick, name: "Flick Tracker", description: "A movie tracking application", githubLink: "https://github.com/NicholasTozzi/flick-tracker", link: "https://flick-tracker.herokuapp.com/" },
    { image: manifesto, name: "Gambling Manifesto", link: "https://stickkman.github.io/gamblingManifesto-Proj01/" },
    { image: SEO, name: "Horiseon", description: "", githubLink: "https://github.com/jdelvalle12/horiseon-webpage", link: "https://jdelvalle12.github.io/horiseon-webpage/" },
    { image: Journeez, name: "journeEZ", description: "", githubLink: "https://github.com/jdelvalle12/journeeztrip", link: "https://www.journeeztrip.com/" },
    { image: Weather, name: "Weather Forecast", description: "", githubLink: "https://github.com/jdelvalle12/5-day-national-weather-forecast", link: "https://jdelvalle12.github.io/5-day-national-weather-forecast/" },
    { image: Planner, name: "Day Planner", description: "", githubLink: "https://github.com/jdelvalle12/day-planner", link: "https://jdelvalle12.github.io/day-planner/" },
    { image: Notepad, name: "Notepad", description: "", githubLink: "https://github.com/jdelvalle12/notepad", link: "https://notetaken.herokuapp.com/" },
    { image: Winery, name: "The Valley Winery", description: "", githubLink: "https://github.com/jdelvalle12/thevalleywinery", link: "https://jdelvalle12.github.io/thevalleywinery/" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <div key={index}>
          <div className="project-card">
            <Image src={project.image} alt={`Slide ${index + 1}`} width={600} height={400}/>
            <div className="project-card-overlay">
              <a href={project.link} className="project-card-image-link">
                <h3>{project.name}</h3>
              </a>
            </div>
          </div>
          <div className="project-card-details">
            <p>{project.description}</p>
          </div>
          <div className="project-card-links">
            <a href={project.githubLink}>GitHub</a>
          </div>
        </div>
      ))}
    </Slider>
  );
};

const Projects = () => {
  return (
    <div>
      <video src={Fireworks} autoPlay loop muted className="projects-background-video"></video>      
      <div>
        <div className="carousel-container relative w-full items-center ">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default Projects ;