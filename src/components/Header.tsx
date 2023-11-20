import { useEffect, useState } from "react";
import { RiMenuFill, RiSearchLine, RiArrowLeftLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../app-navigation/routes";
import useGlobalStates from "../store/useGlobalStates";
import Sidebar from "./Sidebar";
import useMenu from "../store/useMenu";

type HeaderProps = {
  subCategories?: string[];
};

const Header = ({ subCategories }: HeaderProps) => {
  const {
    activeSubCategory,
    setActiveCategory,
    openSearchBar,
    setOpenSearchBar,
    searchQuery,
    setSearchQuery,
  } = useGlobalStates((state) => state);
  const { menu_details } = useMenu((state) => state);
  const { pathname } = useLocation();
  const isHomePage = pathname === ROUTES.home && true;
  const navigate = useNavigate();
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleBackToHome = () => {
    setOpenSearchBar(false);
    navigate(ROUTES.home);
  };

  useEffect(() => {
    if (subCategories?.length) {
      setActiveCategory(subCategories[0]);
    }
  }, []);

  const autoScroll = () => {
    setTimeout(() => {
      const activeLink = document.getElementById(`${activeSubCategory}-link`);
      if (activeLink) {
        activeLink.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    }, 1000);
  };

  useEffect(() => {
    autoScroll();
  }, [activeSubCategory]);

  return (
    <>
      <header className="w-full">
        <nav className="h-[100px] bg-black flex items-center justify-between relative text-antique-gold px-4">
          {isHomePage ? (
            <button
              className="text-[25px] p-2 rounded-full hover:bg-neutral-900 transition"
              onClick={() => setOpenSidebar(true)}
            >
              <RiMenuFill />
            </button>
          ) : (
            <button
              className="text-[25px] p-2 rounded-full hover:bg-neutral-900 transition"
              onClick={handleBackToHome}
            >
              <RiArrowLeftLine />
            </button>
          )}
          <div className="absolute left-[50%] translate-x-[-50%] leading-[1] text-[22px] xs:text-[30px] font-black text-center">
            <h1>{menu_details?.menu_name}</h1>
          </div>
          {!isHomePage && (
            <button
              className="text-[25px] p-2 rounded-full hover:bg-neutral-900 transition"
              onClick={() => setOpenSearchBar(!openSearchBar)}
            >
              <RiSearchLine />
            </button>
          )}
        </nav>

        {openSearchBar && (
          <div className="py-4 px-6 bg-neutral-950">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-neutral-800 rounded-lg outline-none h-[44px] pl-4 text-[15px] text-neutral-400 bg-black placeholder:text-neutral-600"
            />
          </div>
        )}

        {subCategories && (
          <div className="px-6 py-4 bg-black flex items-center gap-3 border-b-[5px] overflow-x-auto hide-scroll border-t-2 border-neutral-950">
            {subCategories.map((subCategory, index) => (
              <a
                key={index}
                id={`${subCategory}-link`}
                href={`#${subCategory}`}
                className={`cat-link min-w-fit py-1 px-4 rounded-lg font-semibold border border-antique-gold ${
                  activeSubCategory === subCategory
                    ? "bg-antique-gold text-black"
                    : "bg-none text-antique-gold"
                }`}
                onClick={() => setActiveCategory(subCategory)}
              >
                {subCategory.toUpperCase()}
              </a>
            ))}
          </div>
        )}
      </header>

      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
    </>
  );
};

export default Header;
