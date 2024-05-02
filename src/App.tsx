// import ComponentPreview from "./sections/ComponentPreview";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";

const App: React.FC = () => {
  return (
    <div className="p-6">
    <Navbar />
      <div className="px-80">
        <Hero />
        <Skills />
      </div>
    </div>
  );
}

export default App;
