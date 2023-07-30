import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Program from './components/Programs/Program';
import Reason from './components/Reasons/Reason';
import Testimonial from './components/Testimonials/Testimonial';

function App() {
  return (
    <div className="App">
    <Hero/>
    <Program/>
    <Reason/>
    <Plans/>
    <Testimonial/>
    <Join/>
    <Footer/>      
    </div>
  );
}

export default App;
