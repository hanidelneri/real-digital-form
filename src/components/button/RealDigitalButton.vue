<template>
  <button :disabled="disabled" @click="onClick">
    <slot />
  </button>
</template>
<script>
import { REAL_DIGITAL_BUTTON } from "@/components/names";
export default {
  name: REAL_DIGITAL_BUTTON,
  data() {
    return {
      disabled: false,
    };
  },
  methods: {
    async onClick() {
      if (this.$parent && this.$parent.submit) {
        this.disabled = true;
        await this.$parent.submit();
        this.disabled = false;
      }
      this.$emit("click");
    },
  },
};
</script>
