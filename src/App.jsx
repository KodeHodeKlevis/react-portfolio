import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import AboutPage from "./pages/AboutPage";
import Projects from "./sections/Projects";
import Cta from "./sections/Cta";
import Footer from "./sections/Footer";
import ProjectsPage from "./pages/ProjectsPage";
import Skills from "./sections/Skills";
import JavaScript from "./proficency/JavaScript";
import CSharp from "./proficency/CSharp";
import Html from "./proficency/Html";
import Styling from "./proficency/Styling";
import Python from "./proficency/Python";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/*  Home Page with Scroll Sections */}
        <Route
          path="/"
          element={
            <div className="w-full">
              <Hero />
              <section id="skills">
                <Skills />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section>
                <Cta id="cta" />
              </section>
              <Footer />
            </div>
          }
        />

        {/*  About Page */}
        <Route path="/about" element={<AboutPage />} />
        {/* Projects Button Page */}
        <Route path="/myprojects" element={<ProjectsPage />} />
        {/* JavaScript Icon Button */}
        <Route path="/javascript" element={<JavaScript />} />
        {/* C# Icon Button */}
        <Route path="/csharp" element={<CSharp />} />
        {/* Html Icon Button */}
        <Route path="/html" element={<Html />} />
        {/* Css Icon Button */}
        <Route path="/css" element={<Styling />} />
        {/* Python Icon Button */}
        <Route path="/python" element={<Python />} />
      </Routes>
    </Router>
  );
}
