import Subtitle from "../components/Subtitle";
import Tag from "../components/Tag";

import { text } from "./../mocks/Skills"

const Skills = () => {
  return (
    <div className="mt-20">
      <Subtitle isSectionTitle={true} label="My main skills"/>
      <div className="md:flex">
        <div className="md:w-1/3">
          {text.map(text => (
            text.c1.map(c1 => (
              <Tag label={c1}/>
            ))
          ))}
        </div>
        <div className="md:w-1/3">
          {text.map(text => (
            text.c2.map(c2 => (
              <Tag label={c2}/>
            ))
          ))}
        </div>
        <div className="md:w-1/3">
          {text.map(text => (
            text.c3.map(c3 => (
              <Tag label={c3}/>
            ))
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
