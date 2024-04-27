import Button from "./components/Button";

const handleClick = () => {
  console.log('Button clicked');
};

const App: React.FC = () => {
  return (
    <>
      <h1 className="font-mono text-3xl font-bold underline">Hello world!</h1>
      <Button label="Click me" onClick={handleClick} />
    </>
  );
}

export default App;
