<template>
  <form novalidate onsubmit="return false">
    <slot />
  </form>
</template>
<script>
import { REAL_DIGITAL_FORM, REAL_DIGITAL_TEXTFIELD } from "@/components/names";
export default {
  name: REAL_DIGITAL_FORM,
  methods: {
    submit() {
      debugger;
      const validationStatus = this.$children
        .filter((child) => child.$options.name === REAL_DIGITAL_TEXTFIELD)
        .map((child) => child.validate());
      console.log(validationStatus);
    },
  },
};
</script>
