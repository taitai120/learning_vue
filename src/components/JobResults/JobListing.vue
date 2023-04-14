<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-item v-for="job in displayJobs" :key="job.id" :job="job" />
    </ol>

    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
        <router-link
          v-if="previousPage"
          :to="{ name: 'JobResults', query: { page: previousPage } }"
          class="mx-3 text-sm font-semibold text-brand-blue-1"
          >Previous</router-link
        >
        <router-link
          v-if="nextPage"
          :to="{ name: 'JobResults', query: { page: nextPage } }"
          class="mx-3 text-sm font-semibold text-brand-blue-1"
          >Next</router-link
        >
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { FETCH_JOBS, FILTERED_JOBS_BY_ORGANIZATION } from "@/store/constants";
import JobItem from "@/components/JobResults/JobItem.vue";
export default {
  name: "JobListing",
  components: {
    JobItem,
  },
  data() {
    return {
      limit: 10,
      totalPages: null,
    };
  },
  computed: {
    currentPage() {
      const pageString = this.$route.query.page || "1";
      return Number.parseInt(pageString);
    },
    displayJobs() {
      const pageNumber = this.currentPage;
      const firstJobIndex = (pageNumber - 1) * this.limit;
      const lastJobIndex = pageNumber * this.limit;
      return this.FILTERED_JOBS_BY_ORGANIZATION.slice(
        firstJobIndex,
        lastJobIndex
      );
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = this.totalPage;
      return nextPage <= maxPage ? nextPage : undefined;
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },
    totalPage() {
      return this.FILTERED_JOBS_BY_ORGANIZATION.length / this.limit;
    },
    ...mapGetters([FILTERED_JOBS_BY_ORGANIZATION]),
  },
  async mounted() {
    await this.FETCH_JOBS();
  },
  methods: {
    ...mapActions([FETCH_JOBS]),
  },
};
</script>
