<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-item v-for="job in jobs" :key="job.id" :job="job" />
    </ol>
  </main>
</template>

<script>
import axios from "axios";
import JobItem from "@/components/JobResults/JobItem.vue";
export default {
  name: "JobListing",
  components: {
    JobItem,
  },
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const response = await axios.get("http://localhost:3000/jobs");
      this.jobs = response.data;
    },
  },
};
</script>
