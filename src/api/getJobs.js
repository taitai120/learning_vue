import axios from "axios";
const getJobs = async () => {
  try {
    const response = await axios.get("http://localhost:3000/jobs");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getJobs;
