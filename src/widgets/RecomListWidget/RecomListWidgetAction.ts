import axios from "axios";
import { baseAPI } from "../../shared/BaseAPI";
import { RecCard } from "../../entities/types";

export const fetchRecCards = async (): Promise<RecCard[]> => {
  const username = "admin";
  const password = "admin";
  const token = btoa(`${username}:${password}`);

  try {
    const response = await axios.get<RecCard[]>(`${baseAPI}/api/tours/`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching cards:", error);
    return [];
  }
};
