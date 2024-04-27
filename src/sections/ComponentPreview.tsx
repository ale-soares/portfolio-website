import Button from "./../components/Button";
import Link from "./../components/Link";

const handleClick = () => {
  console.log('Button clicked');
};

const ComponentPreview: React.FC = () => {
  return (
    <>
      <Button label="Click me" onClick={handleClick} />
      <Link linkUrl="http://localhost:5173/" label="dasds"/>
    </>
  );
}

export default ComponentPreview;