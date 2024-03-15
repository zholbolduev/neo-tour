import axios from "axios";
import { baseAPI } from "../../../shared/BaseAPI";

interface FeedbackData {
  phone_number: string;
  number_of_people: number;
  comments: string;
}
// booking_date: 3;
// status: "fd";
// user: 2;
// tour: 1;

export const submitFeedback = async (data: FeedbackData): Promise<void> => {
  try {
    const response = await axios.post(`${baseAPI}/api/bookings/`, data, {
      auth: {
        username: "admin",
        password: "admin",
      },
    });

    if (response.status !== 200) {
      throw new Error("Failed to submit feedback");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error submitting feedback:", error.message);
    throw error;
  }
};
