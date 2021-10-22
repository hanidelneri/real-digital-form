<template>
  <button @click="onClick">
    <slot />
  </button>
</template>
<script>
import { REAL_DIGITAL_BUTTON } from "@/components/names";
export default {
  name: REAL_DIGITAL_BUTTON,
  methods: {
    onClick() {
      if (this.$parent && this.$parent.submit) this.$parent.submit();
      this.$emit("click");
    },
  },
};
</script>
