<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
import { toRefs, computed } from "vue";
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  setup(props) {
    const { type } = toRefs(props);
    const buttonClass = computed(() => {
      return {
        [type.value]: true,
      };
    });

    return {
      buttonClass,
    };
  },
  // computed: {
  //   buttonClass() {
  //     return {
  //       [this.type]: true,
  //     };
  //   },
  // },
  // methods: {
  //   doubleHeight() {
  //     this.height *= 2;
  //   },
  // },
};
</script>

<style scoped>
button {
  @apply px-5 py-3 rounded font-medium;
}

.primary {
  @apply text-white bg-brand-blue-1 hover:shadow-blue;
}

.secondary {
  @apply text-brand-blue-2 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
