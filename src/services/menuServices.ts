import axios from "axios";
import { BASE_URL } from "../config/baseUrl";

const getMenu = async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data.data.menu_items;
};

const menuServices = {
  getMenu,
};

export default menuServices;
