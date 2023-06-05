import React from 'react';
import Image from 'react-bootstrap/Image';
import Flick from '../images/Flick-Tracker.jpg';
// import manifesto from '../images/manifesto.jpg';
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
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
import { Favicon } from 'react-favicon';
// import { DiMongodb } from 'react-icons/di';



const Carousel = () => {
  const projects = [
    { image: Flick, name: "Flick Tracker", description: "Flick Tracker is looking to create a new way to engage with fellow movie lovers, through a user database system. Each user will have a profile where you can view their followed users, following, watched movies, etc. We want to show you analytics based off of the information you provide, to help refine and diversify your taste. We will allow people to post reviews on movies they have seen, in order for their followers to potentially add new items into their watchlist that wouldn't be curated from their own analytics.", 
      technologies: [], githubLink: "https://github.com/NicholasTozzi/flick-tracker", link: "https://flick-tracker.herokuapp.com/" },
    // { image: manifesto, name: "Gambling Manifesto", link: "https://stickkman.github.io/gamblingManifesto-Proj01/" },
    { image: SEO, name: "Horiseon", description: "This app is used as example of what a user may want on their own website such as styling or layout.", technologies: [<FaHtml5 />, <FaCss3 />] ,
      githubLink: "https://github.com/jdelvalle12/horiseon-webpage", link: "https://jdelvalle12.github.io/horiseon-webpage/" },
    { image: Journeez, name: "journeEZ", description: "Many people travel to many parts of the world everyday, and some of them are first time solo travelers, but they get overwhelmed with all the information that is out there, about where to go, where to stay, where to eat, what to do, etc. This app aims to ease those nerves for first time travelers in the most simplistic way by providing information and tips as well as share their experience with other solo travelers and a way to document their experiences.", 
      technologies: [<FaReact />, <FaNodeJs />, <FaHtml5 />, <FaCss3 />, <FaJs />] , githubLink: "https://github.com/jdelvalle12/journeeztrip", link: "https://www.journeeztrip.com/" },
    { image: Weather, name: "Weather Forecast", description: "This app allows users to input a city, click the search buttion and allows you to see the weather in your area or other areas currently and for the next five days.", 
      technologies: [<FaHtml5 />, <FaCss3 />, <FaJs />] ,githubLink: "https://github.com/jdelvalle12/5-day-national-weather-forecast", link: "https://jdelvalle12.github.io/5-day-national-weather-forecast/" },
    { image: Planner, name: "Day Planner", description: "This app allows users to input appointments, meetings, birthdays, etc. in the planner and save it in a day planner", 
      technologies: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaNodeJs /> ] ,githubLink: "https://github.com/jdelvalle12/day-planner", link: "https://jdelvalle12.github.io/day-planner/" },
    { image: Notepad, name: "Notepad", description: "This app allows users to input notes and delete whenever they choose to.", 
      technologies: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaNodeJs />] ,githubLink: "https://github.com/jdelvalle12/notepad", link: "https://notetaken.herokuapp.com/" },
    { image: Winery, name: "The Valley Winery", description: "This app is used as an example of what a user may want on their own website such as styling or layout.", technologies: [<FaHtml5 />, <FaCss3 />] ,
      githubLink: "https://github.com/jdelvalle12/thevalleywinery", link: "https://jdelvalle12.github.io/thevalleywinery/" }
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
            <div className="project-card-icons">
              <h5>Technologies:</h5>
                  {project.technologies.map((technology, i) => (
                    <span key={i} className="technology-icon">
                      {technology}
                    </span>
                  ))}
                </div>
          <div className="project-card-links">
            <a href={project.githubLink}>GitHub</a>
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