// import "style.css";
import About from "./components/About/about";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Github from "./components/Github/github";
import Intro from "./components/Intro/intro";
import Navbar from "./components/Navbar/navbar";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Github />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
