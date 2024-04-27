import Button from "./../components/Button";
import Link from "./../components/Link";
import Tag from "../components/Tag";
import Card from "../components/Card";
import Subtitle from "../components/Subtitle";

import github from "../assets/icons/github.png"

const handleClick = () => {
  console.log('Button clicked');
};

const ComponentPreview: React.FC = () => {
  return (
    <>
      <Button label="Click me" onClick={handleClick} />
      <Link isIcon={false} linkUrl="http://localhost:5173/" label="dasds"/>
      <Tag label="React.js"/>
      <Card description="dsadsa" titleUrl="http://localhost:5173/" titleLabel="dasdas"/>
      <Link isIcon={true} linkUrl="http://localhost:5173/" iconSrc={ github } iconAlt="das"/>
      <Subtitle isSectionTitle={true} label="dsadsa"/>
    </>
  );
}

export default ComponentPreview;