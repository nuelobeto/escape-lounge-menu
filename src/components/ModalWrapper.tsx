import { RiCloseFill } from "react-icons/ri";

type ModalWrapperProps = {
  children: React.ReactNode;
  title?: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalWrapper = ({
  children,
  title,
  isOpen,
  setIsOpen,
}: ModalWrapperProps) => {
  const handlePropagation = (e: any) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`fixed w-full h-screen top-0 left-0 z-10 transition duration-300 ${
        isOpen ? "bg-[#0000009d]" : "pointer-events-none"
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className={`absolute w-full bg-white rounded-t-3xl bottom-0 left-0 transition duration-[0.4s] ${
          isOpen ? " translate-y-0" : "t translate-y-[100%]"
        }`}
        onClick={(e) => handlePropagation(e)}
      >
        <div
          className={`p-4 flex items-center rounded-t-3xl bg-gray-100 border-b-2 border-gray-200 ${
            title ? "justify-between" : "justify-end"
          }`}
        >
          {title && <p className="text-[18px] font-semibold">{title}</p>}
          <button
            className="text-[30px] p-1 rounded-full hover:bg-gray-300 transition"
            onClick={() => setIsOpen(false)}
          >
            <RiCloseFill />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
