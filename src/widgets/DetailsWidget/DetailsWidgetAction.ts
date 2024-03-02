import axios from "axios";
import { baseAPI } from "../../shared/BaseAPI";

export const getOneCard = async (id: string) => {
  try {
    const response = await axios.get(`${baseAPI}/api/tour/${id}`);
    if (response.data && response.data.card && response.data.card.length > 0) {
      return response.data.meals[0];
    } else {
      throw new Error("No card data found");
    }
  } catch (error) {
    console.error("Error fetching card:", error);
    throw error;
  }
};
