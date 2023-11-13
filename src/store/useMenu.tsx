import { create } from "zustand";
import menuServices from "../services/menuServices";
import { MenuItemT } from "../types/types";
import { capitalizeFirstLetter } from "../utils/strings";

type MenuState = {
  menu: MenuItemT[];
  getMenu: () => void;
};

const useMenu = create<MenuState>((set) => ({
  menu: [],
  getMenu: async () => {
    const menu = await menuServices.getMenu();
    const clean_menu = menu.map((item: MenuItemT) => {
      return {
        id: item.id,
        item_amount: item.item_amount,
        item_category: capitalizeFirstLetter(item.item_category),
        item_description: item.item_description,
        item_image: item.item_image,
        item_name: item.item_name,
        item_subcategory: capitalizeFirstLetter(item.item_subcategory),
      };
    });
    set((state) => ({
      menu: (state.menu = clean_menu),
    }));
  },
}));

export default useMenu;
