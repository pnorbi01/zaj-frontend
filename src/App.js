import NavBar from './NavBar';
import Hero from './Hero';
import About from './About';
import Project from './Project';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <div className="h-screen">
        <Hero />
      </div>
      <About />
      <Project />
    </>
  );
}

export default App;
