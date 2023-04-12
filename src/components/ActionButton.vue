<template>
  <button :class="buttonClass">
    {{ btnText }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    btnText: {
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
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      };
    },
  },
  methods: {
    doubleHeight() {
      this.height *= 2;
    },
  },
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
