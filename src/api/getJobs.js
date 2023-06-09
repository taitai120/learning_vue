import axios from "axios";
import { BASE_URL } from "./constant";
const getJobs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/jobs`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getJobs;
