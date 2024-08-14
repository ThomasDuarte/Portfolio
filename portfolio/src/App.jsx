import { useTranslation } from "react-i18next";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import MusicProductions from "./components/MusicProductions";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { LanguageProvider } from "./context/LanguageContext";
import "./i18n";

function App() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <LanguageProvider>
      <div className="App">
        <NavBar changeLanguage={changeLanguage} />
        <Banner />
        <Skills />
        <Projects />
        <MusicProductions />
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
