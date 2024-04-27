import Button from "./../components/Button";
import Link from "./../components/Link";
import Tag from "../components/Tag";

const handleClick = () => {
  console.log('Button clicked');
};

const ComponentPreview: React.FC = () => {
  return (
    <>
      <Button label="Click me" onClick={handleClick} />
      <Link linkUrl="http://localhost:5173/" label="dasds"/>
      <Tag label="React.js"/>
    </>
  );
}

export default ComponentPreview;