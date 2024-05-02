import Link from "./../components/Link";
import Subtitle from "../components/Subtitle";

import { data } from "./../mocks/Other"

const Other = () => {
  return (
    <div className="mt-20">
      <Subtitle isSectionTitle={true} label="Other cool things I made"/>
      {data.map(e => (
        <div className="md:flex mb-3">
          <p className="min-w-64 text-theme-white text-body">{e.category}</p>
          <Link linkUrl={e.url} label={e.title} isIcon={false}/>
        </div>
      ))}
    </div>
  );
};

export default Other;
