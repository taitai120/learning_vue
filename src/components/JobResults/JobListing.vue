<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-item />
      <job-item />
      <job-item />
      <job-item />
      <job-item />
      <job-item />
    </ol>
  </main>
</template>

<script>
import JobItem from "@/components/JobResults/JobItem.vue";
export default {
  name: "JobListing",
  components: {
    JobItem,
  },
};
</script>
