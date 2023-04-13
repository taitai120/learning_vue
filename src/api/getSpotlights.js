import axios from "axios";
import { BASE_URL } from "./constant";
const getSpotlights = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/spotlights`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getSpotlights;
