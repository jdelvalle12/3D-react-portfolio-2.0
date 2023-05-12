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
    { image: Flick, name: "Flick Tracker", link: "https://flick-tracker.herokuapp.com/" },
    { image: manifesto, name: "Gambling Manifesto", link: "https://stickkman.github.io/gamblingManifesto-Proj01/" },
    { image: SEO, name: "Horiseon", link: "https://jdelvalle12.github.io/horiseon-webpage/" },
    { image: Journeez, name: "journeEZ", link: "https://www.journeeztrip.com/" },
    { image: Weather, name: "Weather Forecast", link: "https://jdelvalle12.github.io/5-day-national-weather-forecast/" },
    { image: Planner, name: "Day Planner", link: "https://jdelvalle12.github.io/day-planner/" },
    { image: Notepad, name: "Notepad", link: "https://notetaken.herokuapp.com/" },
    { image: Winery, name: "The Valley Winery", link: "https://jdelvalle12.github.io/thevalleywinery/" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {projects.map((project, index) => (
        <div key={index}>
          <div className="project-card">
            <Image src={project.image} alt={`Slide ${index + 1}`} />
            <div className="project-card-overlay">
              <h3>
                <a href={project.link}>{project.name}</a>
              </h3>
            </div>
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