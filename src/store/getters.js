import {
  UNIQUE_ORGANIZATIONS,
  FILTERED_JOBS_BY_ORGANIZATION,
} from "./constants";

export const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganizations = new Set();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },
  [FILTERED_JOBS_BY_ORGANIZATION](state) {
    if (state.selectedOrganizations.length === 0) return state.jobs;
    return state.jobs.filter((job) =>
      state.selectedOrganizations.includes(job.organization)
    );
  },
};
