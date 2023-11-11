import React from 'react';
import Hero from './components/HomeComponents/Hero';
import About from './components/HomeComponents/About';
import Service from './components/HomeComponents/Service';
import Contact from './components/HomeComponents/Contact';
import Project from './components/HomeComponents/Project';
import { SliderData } from './components/SliderData';

function Home() {
  return (
    <>
        <div className='h-screen'>
            <Hero />
        </div>
        <About />
        <Service />
        <Contact />
        <Project slides={SliderData} />
    </>
  );
}

export default Home;