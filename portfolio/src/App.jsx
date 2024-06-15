import Banner from "./components/Banner";
import Contact from "./components/Contact";
import MusicProductions from "./components/MusicProductions";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <MusicProductions />
      <Contact />
    </div>
  );
}

export default App;
