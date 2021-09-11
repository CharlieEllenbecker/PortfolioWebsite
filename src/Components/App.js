import NavBar from './NavBar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}