import Link from "./../components/Link";

import { data } from "../mocks/Navbar"

const Navbar = () => {
  return (
    <div className="sticky top-6">
      <div className="flex justify-end">
        <div className="flex w-40 justify-between">
          {data.map(e => (
            <Link 
              isIcon={true}
              linkUrl={e.url}
              iconSrc={e.src}
              iconAlt={e.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
