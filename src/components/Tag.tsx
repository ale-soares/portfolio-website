interface TagProps {
  label: string;
}

const Tag: React.FC<TagProps> = ({ label }) => {
  return (
    <p className="font-mono text-body text-theme-blue">
      {label}
    </p>
  );
};

export default Tag;
