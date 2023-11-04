import NavBar from './NavBar';
import Hero from './Hero';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <div className="h-screen">
        <Hero />
      </div>
    </>
  );
}

export default App;
