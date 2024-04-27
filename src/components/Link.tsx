interface LinkProps {
  label?: string;
  linkUrl: string;
  isIcon: boolean;
  iconSrc?: string;
  iconAlt?: string;
}

const Link: React.FC<LinkProps> = ({ label, linkUrl, isIcon, iconSrc, iconAlt }) => {
  return (
    <a href={linkUrl} className="underline font-mono text-body text-theme-blue">
      {isIcon ? (
        <img className="w-8" src={iconSrc} alt={iconAlt} />
      ) : label}
    </a>
  );
};

export default Link;
