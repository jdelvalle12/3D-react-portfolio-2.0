import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/Header";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css';
// import './styles';

function App() {
  return (
    <Router>
      <div>
        <Header />
        
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
