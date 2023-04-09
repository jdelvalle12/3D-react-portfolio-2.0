import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import './App.css';


export default function App() {
  return (
    <Router>
      <div>
        <Header>
         <Navbar />
         </Header>
        
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
        
        <Footer />
      </div>
    </Router>
  );
}


