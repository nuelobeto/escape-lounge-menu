import { useEffect, useState } from "react";
import { RiMenuFill, RiSearchLine, RiArrowLeftLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../app-navigation/routes";
import useGlobalStates from "../store/useGlobalStates";
import Sidebar from "./Sidebar";

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

  return (
    <>
      <header className="w-full">
        <nav className="h-[100px] bg-sky-700 flex items-center justify-between relative text-white px-4">
          {isHomePage ? (
            <button
              className="text-[25px] p-2 rounded-full hover:bg-sky-800 transition"
              onClick={() => setOpenSidebar(true)}
            >
              <RiMenuFill />
            </button>
          ) : (
            <button
              className="text-[25px] p-2 rounded-full hover:bg-sky-800 transition"
              onClick={handleBackToHome}
            >
              <RiArrowLeftLine />
            </button>
          )}
          <div className="absolute left-[50%] translate-x-[-50%] leading-[1] text-[22px] xs:text-[30px] font-black text-center">
            <h1>
              Escape <br /> Lounge
            </h1>
          </div>
          {!isHomePage && (
            <button
              className="text-[25px] p-2 rounded-full hover:bg-sky-800 transition"
              onClick={() => setOpenSearchBar(!openSearchBar)}
            >
              <RiSearchLine />
            </button>
          )}
        </nav>

        {openSearchBar && (
          <div className="py-4 px-6 bg-gray-100 border-b">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-200 rounded-lg outline-none h-[44px] pl-4 text-[15px] bg-white"
            />
          </div>
        )}

        {subCategories && (
          <div className="px-6 py-4 bg-gray-100 flex items-center gap-3 border-b-[5px] border-gray-200 overflow-x-auto hide-scroll">
            {subCategories.map((subCategory, index) => (
              <a
                key={index}
                href={`#${subCategory}`}
                className={`min-w-fit py-1 px-4 rounded-lg font-semibold border border-sky-700 ${
                  activeSubCategory === subCategory
                    ? "bg-sky-700 text-white"
                    : "bg-none text-sky-700"
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
