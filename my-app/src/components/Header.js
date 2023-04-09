import React from 'react';
// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
    <div id="container">  
        <a href="index.html" class="logo">Del Valle Digital Designs</a>   
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