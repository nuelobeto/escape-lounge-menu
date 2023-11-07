import Drawer from "./Drawer";
import { MdLocationOn, MdLocalPhone, MdEmail } from "react-icons/md";
import InstagramImg from "../assets/instagram-image.png";

type SidebarProps = {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ openSidebar, setOpenSidebar }: SidebarProps) => {
  return (
    <Drawer isOpen={openSidebar} setIsOpen={setOpenSidebar}>
      <div className="w-full h-full flex items-end py-12 px-6">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-[18px] text-neutral-300">
            Get in touch
          </h3>

          <p className="flex items-center gap-2 cursor-pointer text-[15px] text-neutral-400">
            <MdLocationOn className="text-[30px] text-red-600" />
            35 Ugbor Road, GRA, Benin City, Nigeria.
          </p>

          <p className="flex items-center gap-2 cursor-pointer text-[15px] text-neutral-400">
            <MdLocalPhone className="text-[25px] text-green-600" />
            +234 813 409 992
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/theescape.ng/?hl=en"
              target="_blank"
              className="text-[25px]"
            >
              <img src={InstagramImg} width={25} alt="" />
            </a>
            <a
              href="mailto:info@theescape.ng"
              target="_blank"
              className="text-[30px] text-neutral-400"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
