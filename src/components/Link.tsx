interface LinkProps {
  label: string;
  linkUrl: string;
}

const Link: React.FC<LinkProps> = ({ label, linkUrl }) => {
  return (
    <a href={linkUrl} className="underline font-mono text-body text-theme-blue">
      {label}
    </a>
  );
};

export default Link;
