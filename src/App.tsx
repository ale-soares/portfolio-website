// import ComponentPreview from "./sections/ComponentPreview";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Other from "./sections/Other";

const App: React.FC = () => {
  return (
    <div className="p-6">
    <Navbar />
      <div className="px-80 pb-40">
        <Hero />
        <Skills />
        <Projects />
        <Other />
      </div>
    </div>
  );
}

export default App;
