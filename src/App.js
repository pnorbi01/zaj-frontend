import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route, Navigate  } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <NavBar />
          <Switch>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route exact path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
