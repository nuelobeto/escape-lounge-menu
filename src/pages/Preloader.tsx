const Preloader = () => {
  return (
    <div className="w-full h-screen bg-black fixed top-0 left-0 z-30 flex items-center justify-center">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
