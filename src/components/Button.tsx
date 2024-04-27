interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button 
      className="rounded py-3 px-12 font-mono text-body text-theme-blue border-2 border-theme-blue"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
