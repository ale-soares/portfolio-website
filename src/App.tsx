// import ComponentPreview from "./sections/ComponentPreview";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

const App: React.FC = () => {
  return (
    <div className="p-6">
    <Navbar />
      <div className="px-80">
        <Hero />
      </div>
    </div>
  );
}

export default App;
