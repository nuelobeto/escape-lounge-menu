import { RiCloseFill } from "react-icons/ri";

type DrawerProps = {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {
  const handlePropagation = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`fixed w-full h-screen top-0 left-0 z-10 transition duration-300 pr-12 ${
        isOpen ? "bg-[#0000009d]" : "pointer-events-none"
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`relative max-w-[400px] w-full h-full bg-neutral-950 transition duration-[0.4s] ${
          isOpen ? " translate-x-0" : "t translate-x-[-100%]"
        }`}
        onClick={(e) => handlePropagation(e)}
      >
        <button
          className="absolute top-6 right-6 text-[30px] p-1 rounded-full hover:bg-neutral-900 text-antique-gold transition"
          onClick={() => setIsOpen(false)}
        >
          <RiCloseFill />
        </button>

        {children}
      </div>
    </div>
  );
};

export default Drawer;
