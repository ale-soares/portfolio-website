interface LoaderProps {
  isLoading?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <div className="z-50 bg-black/50 w-screen h-screen sticky top-0">
      {isLoading ? (
        <img 
          className="absolute left-0 right-0 top-0 bottom-0 text-center m-auto w-40"
          src="/images/logo-loader-gif.gif"
        />
      ) : <></>}
    </div>
  );
};

export default Loader;
