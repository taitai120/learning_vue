<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="text-base my-4 font-semibold">What do you want do to?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>
      <accordion header="Job Types">
        <div class="mt-5">
          <fieldset>
            <ul class="flex flex-row flex-wrap">
              <li class="w-1/2 h-8">
                <input id="VueTube" type="checkbox" class="mr-3" />
                <label for="VueTube">VueTube</label>
              </li>
              <li class="w-1/2 h-8">
                <input id="Between Vue and Me" type="checkbox" class="mr-3" />
                <label for="Between Vue and Me">Between Vue</label>
              </li>
              <li class="w-1/2 h-8">
                <input id="Et Vue Brute" type="checkbox" class="mr-3" />
                <label for="Et Vue Brute">Et Vue Brute</label>
              </li>
              <li class="w-1/2 h-8">
                <input id="Vue and a Half Men" type="checkbox" class="mr-3" />
                <label for="Vue and a Half Men">Vue and a Half Men</label>
              </li>
            </ul>
          </fieldset>
        </div>
      </accordion>
      <job-filters-sidebar-organizations />
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import Accordion from "@/components/Shared/Accordion.vue";
import JobFiltersSidebarOrganizations from "./JobFiltersSidebarOrganizations.vue";
export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    Accordion,
    JobFiltersSidebarOrganizations,
  },
  mounted() {
    // console.log("current logged in state: ", this.$store.state.isLoggedIn);
    // this.$store.commit("LOGIN_USER");
    // setTimeout(() => {
    //   console.log(
    //     "after 1 second, current logged in state: ",
    //     this.$store.state.isLoggedIn
    //   );
    // }, 2000);
  },
};
</script>
