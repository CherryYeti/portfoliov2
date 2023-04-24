import './App.css';
import Navbar from './components/sections/Navbar/Navbar'
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Projects from './components/sections/Projects/Projects';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
