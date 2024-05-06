import {text} from "./../mocks/Footer"

const Footer = () => {
  return (
    <div className="mt-6 mb-2 opacity-70 text-center">
      <p className="text-theme-white text-detail">{text.title}</p>
      <p className="text-theme-white text-detail">{text.subtitle}</p>
    </div>
  );
};

export default Footer;
