import Drawer from "./Drawer";
import { MdLocationOn, MdLocalPhone, MdEmail } from "react-icons/md";
import InstagramImg from "../assets/instagram-image.png";
import FacebookImg from "../assets/facebook-image.png";
import TwitterImg from "../assets/twitter-image.png";
import TiktokImg from "../assets/tik-tok-image.png";
import useMenu from "../store/useMenu";

type SidebarProps = {
  openSidebar: boolean;
  setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ openSidebar, setOpenSidebar }: SidebarProps) => {
  const { menu_details } = useMenu((state) => state);
  return (
    <Drawer isOpen={openSidebar} setIsOpen={setOpenSidebar}>
      <div className="w-full h-full flex items-end py-12 px-6">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-[18px] text-neutral-300">
            Get in touch
          </h3>

          <p className="flex items-center gap-2 cursor-pointer text-[15px] text-neutral-400">
            <MdLocationOn className="text-[30px] text-red-600" />
            {menu_details?.address}
          </p>

          <p className="flex items-center gap-2 cursor-pointer text-[15px] text-neutral-400">
            <MdLocalPhone className="text-[25px] text-green-600" />
            {menu_details?.phone_no}
          </p>

          <div className="flex items-center gap-4">
            {menu_details?.instagram_link && (
              <a
                href={menu_details?.instagram_link}
                target="_blank"
                className="text-[25px]"
              >
                <img src={InstagramImg} width={25} alt="" />
              </a>
            )}
            {menu_details?.email && (
              <a
                href={menu_details?.email}
                target="_blank"
                className="text-[30px] text-neutral-400"
              >
                <MdEmail />
              </a>
            )}
            {menu_details?.facebook && (
              <a
                href={menu_details?.facebook}
                target="_blank"
                className="text-[25px]"
              >
                <img src={FacebookImg} width={25} alt="" />
              </a>
            )}
            {menu_details?.twitter && (
              <a
                href={menu_details?.twitter}
                target="_blank"
                className="text-[25px]"
              >
                <img src={TwitterImg} width={25} alt="" />
              </a>
            )}
            {menu_details?.tiktok && (
              <a
                href={menu_details?.tiktok}
                target="_blank"
                className="text-[25px]"
              >
                <img src={TiktokImg} width={25} alt="" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
