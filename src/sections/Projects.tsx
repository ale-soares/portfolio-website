import Card from "./../components/Card";
import Subtitle from "../components/Subtitle";

import { data } from "./../mocks/Projects"

const Projects = () => {
  return (
    <div className="mt-20">
      <Subtitle isSectionTitle={true} label="Projects"/>
      {data.map(e => (
        <div className="mb-4">
          <Card
            titleLabel={e.title}
            titleUrl={e.titleUrl}
            description={e.description}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
