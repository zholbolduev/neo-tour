import axios from "axios";
import { baseAPI } from "../../../shared/BaseAPI";

interface FeedbackData {
  phoneNumber: string;
  peopleCount: number;
  comment: string;
}

export const submitFeedback = async (data: FeedbackData): Promise<void> => {
  try {
    const response = await axios.post(baseAPI, data);

    if (response.status !== 200) {
      throw new Error("Failed to submit feedback");
    }
  } catch (error) {
    console.error(
      "Error submitting feedback:"
      // error.message
    );
    throw error;
  }
};
