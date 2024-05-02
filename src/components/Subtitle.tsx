interface SubtitleProps {
  label: string;
  isSectionTitle: boolean;
}

const Subtitle: React.FC<SubtitleProps> = ({ label, isSectionTitle }) => {
  return (
    <>
      {isSectionTitle ?
        (
          <div className="relative flex py-5 items-center">
            <span className="flex-shrink mr-4 font-sans text-section text-theme-white">{label}</span>
            <div className="flex-grow border-t border-theme-white" />
          </div>
        ) :
        (
          <h3 className="font-sans text-section text-theme-white font-semibold">
            {label}
          </h3>
        )
      }
    </>
  );
};

export default Subtitle;
