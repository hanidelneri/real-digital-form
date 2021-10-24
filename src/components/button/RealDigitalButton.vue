<template>
  <button class="button" :disabled="loading" @click="onClick">
    <span v-if="loading">Loading...</span>
    <slot v-else />
  </button>
</template>
<script>
import { REAL_DIGITAL_BUTTON } from "@/components/names";
export default {
  name: REAL_DIGITAL_BUTTON,
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async onClick() {
      if (this.$parent && this.$parent.submit) {
        this.loading = true;
        await this.$parent.submit();
        this.loading = false;
      }
      this.$emit("click");
    },
  },
};
</script>
<style lang="sass" scoped>
.button
  color: #222020
  text-transform: uppercase
  font-size: 14px
  letter-spacing: 1px
  height: 38px
  width: 100%
  line-height: 38px
  overflow: hidden
  background: #4dbecf
  border-radius: 3px
  box-shadow: 0 15px 30px rgba(black,.1)
  border: 0
  cursor: pointer
  transition: all .3s ease
  &:hover,
  &:focus
    box-shadow: 0 5px 15px rgba(black,.1)
  &:disabled
    opacity: 0.3
    pointer-events: none
</style>
