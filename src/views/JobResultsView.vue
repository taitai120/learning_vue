<template>
  <div class="flex flex-row flex-nowrap w-full">
    <job-filters-sidebar />
    <job-listing />
  </div>
</template>

<script>
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
import JobListing from "@/components/JobResults/JobListing.vue";
export default {
  name: "JobResultsView",
  components: {
    JobFiltersSidebar,
    JobListing,
  },
};
</script>
