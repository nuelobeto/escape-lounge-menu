import { MenuItemT } from "../types/types";
import ModalWrapper from "./ModalWrapper";

type MenuModalProps = {
  openMenuModal: boolean;
  setOpenMenuModal: React.Dispatch<React.SetStateAction<boolean>>;
  item: MenuItemT | null;
};

const MenuModal = ({
  openMenuModal,
  setOpenMenuModal,
  item,
}: MenuModalProps) => {
  return (
    <ModalWrapper isOpen={openMenuModal} setIsOpen={setOpenMenuModal}>
      <div className="p-6 flex flex-col gap-2">
        <h3 className="font-bold text-neutral-300">
          {item?.title.toUpperCase()}
        </h3>
        <p className="text-[14px] text-neutral-400">{item?.description}</p>
        <p className="text-antique-gold text-[15px]">
          ${Number(item?.price).toFixed(2)}
        </p>
      </div>
    </ModalWrapper>
  );
};

export default MenuModal;
