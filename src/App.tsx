import './App.css';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Projects from './components/sections/Projects/Projects';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Hero/>
      <About/>
      <Projects/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
