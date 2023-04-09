import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
    <div className="header-container flex-row justify-space-between-lg justify-center align-center">  
    <Link className="text-light" to="/">
        <div className="logo">Del Valle Digital Designs</div>   
      </Link>
      <nav class="text-right">
        <ul>
          <li><a href="/about me">About Me</a></li> 
          <li><a href="/projects">Projects</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
  );
};

export default Header;