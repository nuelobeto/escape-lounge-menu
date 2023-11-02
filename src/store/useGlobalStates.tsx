import { create } from "zustand";

type GlobalStateTypes = {
  activeSubCategory: string;
  setActiveCategory: (payload: string) => void;
  openSearchBar: boolean;
  setOpenSearchBar: (payload: boolean) => void;
  searchQuery: string;
  setSearchQuery: (payload: string) => void;
};

const useGlobalStates = create<GlobalStateTypes>((set) => ({
  activeSubCategory: "",
  openSearchBar: false,
  searchQuery: "",

  setActiveCategory: (payload: string) => {
    set((state) => ({
      activeSubCategory: (state.activeSubCategory = payload),
    }));
  },

  setOpenSearchBar: (payload: boolean) => {
    set((state) => ({
      openSearchBar: (state.openSearchBar = payload),
    }));
  },

  setSearchQuery: (payload: string) => {
    set((state) => ({
      searchQuery: (state.searchQuery = payload),
    }));
  },
}));

export default useGlobalStates;
