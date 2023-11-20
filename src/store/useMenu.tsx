import { create } from "zustand";
import menuServices from "../services/menuServices";
import { MenuItemT } from "../types/types";
import { capitalizeFirstLetter } from "../utils/strings";

type MenuState = {
  menu: MenuItemT[];
  menu_details: any;
  getMenu: (menuId: string) => void;
  loading: boolean;
};

const useMenu = create<MenuState>((set) => ({
  menu: [],
  loading: false,
  menu_details: null,

  getMenu: async (menuId: string) => {
    set((state) => ({ loading: (state.loading = true) }));
    try {
      const menu = await menuServices.getMenu(menuId);
      const clean_menu = menu.menu_items.map((item: MenuItemT) => {
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
      set((state) => ({ menu_details: (state.menu_details = menu) }));
      set((state) => ({ menu: (state.menu = clean_menu) }));
      set((state) => ({ loading: (state.loading = false) }));
    } catch (error) {
      set((state) => ({ loading: (state.loading = false) }));
    }
  },
}));

export default useMenu;
