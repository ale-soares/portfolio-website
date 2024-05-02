import Button from "../components/Button";
import Subtitle from "../components/Subtitle";
import Tag from "../components/Tag";

import {text} from "./../mocks/Hero"

import Pdf from "./../documents/resume_alexandra_soares.pdf"

const Hero = () => {
  const handleClick = () => window.open(Pdf);

  return (
    <div className="mt-20">
      <Tag label={text.top}/>
      <h1 className="font-sans text-theme-white text-header font-bold">{text.title}</h1>
      <Subtitle isSectionTitle={false} label={text.subtitle}/>
      <p className="text-theme-white md:w-1/2 mt-4 mb-6 text-body">{text.paragraph}</p>
      <Button label={text.btn} onClick={handleClick}/>
    </div>
  );
};

export default Hero;
