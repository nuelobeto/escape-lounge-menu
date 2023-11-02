import { useState } from "react";
import MenuModal from "./MenuModal";
import { MenuItemT, SubCategoryT } from "../types/types";

type SubCategoryCardProps = {
  subCategory: SubCategoryT[];
};

const SubCategoryCard = ({ subCategory }: SubCategoryCardProps) => {
  const heading = [
    ...new Set(
      subCategory.map((item: { subCategory: any }) => item.subCategory)
    ),
  ];
  const [openMenuModal, setOpenMenuModal] = useState(false);
  const [item, setItem] = useState<MenuItemT | null>(null);

  const handleSelectItem = (item: {
    title: string;
    description: string;
    price: string;
  }) => {
    setOpenMenuModal(true);
    setItem(item);
  };

  return (
    <>
      <div
        id={heading[0]}
        className="sub-category flex flex-col gap-6 cursor-pointer"
      >
        <h2 className="text-center p-1 rounded-lg bg-sky-700/10 text-[20px] font-bold text-sky-700">
          {heading[0].toUpperCase()}
        </h2>
        {subCategory.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-1 border-b border-gray-3a00 pb-4"
            onClick={() => handleSelectItem(item)}
          >
            <h3 className="font-bold">{item.title.toUpperCase()}</h3>
            <p className="text-[14px] text-gray-600">{item.description}</p>
            <p className="text-sky-700 text-[15px]">
              ${Number(item.price).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <MenuModal
        openMenuModal={openMenuModal}
        setOpenMenuModal={setOpenMenuModal}
        item={item}
      />
    </>
  );
};

export default SubCategoryCard;
