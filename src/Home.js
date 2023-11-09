import React from 'react';
import Hero from './components/HomeComponents/Hero';
import About from './components/HomeComponents/About';
import Project from './components/HomeComponents/Project';
import Contact from './components/HomeComponents/Contact';

function Home() {
  return (
    <>
        <div className='h-screen'>
            <Hero />
        </div>
        <About />
        <Project />
        <Contact />
    </>
  );
}

export default Home;