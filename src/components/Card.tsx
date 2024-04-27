import Link from "./Link";

interface CardProps {
  description: string;
  titleUrl: string;
  titleLabel: string;
}

const Card: React.FC<CardProps> = ({ description, titleUrl, titleLabel }) => {
  return (
    <div className="rounded bg-theme-light-gray bg-opacity-25 p-4">
      <Link isIcon={false} linkUrl={titleUrl} label={titleLabel}/>
      <p className="font-sans text-body text-theme-white">
        {description}
      </p>
    </div>
  );
};

export default Card;
