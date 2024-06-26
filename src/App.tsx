import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Other from "./sections/Other";
import Effects from "./sections/Effects";
import Footer from "./sections/Footer";

const App: React.FC = () => {
  return (
    <>
      <Effects />
      <div className="p-6">
      <Navbar />
        <div className="lg:px-80 pb-40">
          <Hero />
          <Skills />
          <Projects />
          <Other />
        </div>
      <Footer />
      </div>
    </>
  );
}

export default App;
