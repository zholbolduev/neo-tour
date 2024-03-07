import axios from "axios";
import { baseAPI } from "../../shared/BaseAPI";
import { Card } from "./DetailsWidget";

export const getOneCard = async (id: string): Promise<Card> => {
  try {
    const response = await axios.get(`${baseAPI}/api/tours/${id}/`, {
      auth: {
        username: "admin",
        password: "admin",
      },
    });
    if (response.data && response.data.card) {
      return response.data.card as Card;
    } else {
      console.error("No card data found");
      throw new Error("No card data found");
    }
  } catch (error) {
    console.error("Error fetching card:", error);
    throw error;
  }
};
