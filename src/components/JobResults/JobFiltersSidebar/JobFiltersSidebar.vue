<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    JobFiltersSidebar
  </div>
</template>

<script>
export default {
  name: "JobFiltersSidebar",
  mounted() {
    console.log("current logged in state: ", this.$store.state.isLoggedIn);
    this.$store.commit("LOGIN_USER");
    setTimeout(() => {
      console.log(
        "after 1 second, current logged in state: ",
        this.$store.state.isLoggedIn
      );
    }, 2000);
  },
};
</script>
