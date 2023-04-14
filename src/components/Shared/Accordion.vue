<template>
  <div class="py-5 border-b border-solid border-brand-gray-2">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>

    <div v-if="isOpen" class="w-full mt-5">
      <slot>
        <p class="text-red-600">give me some content please</p>
      </slot>
    </div>
  </div>
</template>

<script>
import { ref, computed, defineProps } from "vue";
export default {
  name: "Accordion",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  setup() {
    // const propsData = defineProps({
    //   header: {
    //     type: String,
    //     required: true,
    //   },
    // });
    const isOpen = ref(false);

    const open = () => {
      isOpen.value = !isOpen.value;
    };

    const caretIcon = computed(() => {
      return isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"];
    });

    return {
      // ...propsData,
      isOpen,
      open,
      caretIcon,
    };
  },
  // props: {
  //   header: {
  //     type: String,
  //     required: true,
  //   },
  // },
  // data() {
  //   return {
  //     isOpen: false,
  //   };
  // },

  // computed: {
  //   caretIcon() {
  //     return this.isOpen ? ["fas", "angle-up"] : ["fas", "angle-down"];
  //   },
  // },
  // methods: {
  //   open() {
  //     this.isOpen = !this.isOpen;
  //   },
  // },
};
</script>

<style scoped></style>
