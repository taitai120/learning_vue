import { createStore } from "vuex";
import getJobs from "@/api/getJobs";
import getSpotlights from "@/api/getSpotlights";

export const LOGIN_USER = "LOGIN_USER";

export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const FETCH_JOBS = "FETCH_JOBS";

export const RECEIVE_SPOTLIGHTS = "RECEIVE_SPOTLIGHTS";
export const FETCH_SPOTLIGHTS = "FETCH_SPOTLIGHTS";

export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
    spotlights: [],
  };
};

export const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs;
  },
  [RECEIVE_SPOTLIGHTS](state, spotlights) {
    state.spotlights = spotlights;
  },
};

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

const store = createStore({
  state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
