<template>
  <div>job view {{ currentJobId }}</div>
</template>

<script>
export default {
  name: "JobView",
  data() {
    return {};
  },
  computed: {
    currentJobId() {
      return this.$route.params.id;
    },
  },
};
</script>
