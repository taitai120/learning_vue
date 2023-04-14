import getJobs from "@/api/getJobs";
import getSpotlights from "@/api/getSpotlights";
import {
  FETCH_JOBS,
  FETCH_SPOTLIGHTS,
  RECEIVE_JOBS,
  RECEIVE_SPOTLIGHTS,
} from "./constants";

export const actions = {
  [FETCH_JOBS]: async (context) => {
    const results = await getJobs();
    context.commit(RECEIVE_JOBS, results);
  },
  [FETCH_SPOTLIGHTS]: async (context) => {
    const results = await getSpotlights();
    context.commit(RECEIVE_SPOTLIGHTS, results);
  },
};
