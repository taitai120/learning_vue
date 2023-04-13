<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id" class="">
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { FETCH_SPOTLIGHTS } from "@/store";
export default {
  name: "Spotlight",

  async mounted() {
    await this.FETCH_SPOTLIGHTS();
  },
  computed: {
    ...mapState(["spotlights"]),
  },
  methods: {
    ...mapActions([FETCH_SPOTLIGHTS]),
  },
};
</script>
