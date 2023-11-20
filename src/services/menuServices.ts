import axios from "axios";
import { BASE_URL } from "../config/baseUrl";

const getMenu = async (menuId: string) => {
  const response = await axios.get(`${BASE_URL}id=${menuId}`);
  return response.data.data.menu_items;
};

const menuServices = {
  getMenu,
};

export default menuServices;
