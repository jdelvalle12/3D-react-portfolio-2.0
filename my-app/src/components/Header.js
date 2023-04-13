import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Header.css';
import '../App.css';

const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
    <div className="header-container flex-row justify-space-between-lg justify-center align-center">
      <Link className="text-light" to="/">
      <div className="logo-relative">
         Del Valle Digital Designs {/* Your logo text */}
         <span className="absolute top-0 left-0 w-full h-full bg-cyan z-0 animate-glitch-1"></span>
          <span className="absolute top-0 left-0 w-full h-full bg-magenta z-0 animate-glitch-2"></span>
      </div>
      </Link>
      <nav className="navi">       
          <a className='about-me'  href="/about">About</a> 
          <a className='projects' href="/projects">Projects</a>
          <a className='contact' href="/contact">Contact</a>
          <a className='resume' href="/resume">Resume</a>
      </nav>
    </div>
  </header>
  );
}

export default Header;