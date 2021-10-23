<template>
  <div :class="['text-field', { error: showErrorMessage }]">
    <label :for="name">
      {{ name }}
    </label>
    <input :id="name" v-model="value" />
    <p v-if="showErrorMessage" data-testid="text-field-error">
      {{ name }} must follow the pattern {{ validation }}
    </p>
  </div>
</template>
<script>
import { REAL_DIGITAL_TEXTFIELD } from "@/components/names";
export default {
  name: REAL_DIGITAL_TEXTFIELD,
  props: {
    name: {
      type: String,
      required: true,
    },
    validation: {
      type: String,
    },
  },
  data() {
    return {
      value: "",
      showErrorMessage: false,
    };
  },
  methods: {
    validate() {
      if (!this.validation) {
        this.showErrorMessage = false;
        return true;
      }
      const regex = new RegExp(this.validation);
      const isValid = regex.test(this.value);
      this.showErrorMessage = !isValid;
      return isValid;
    },
  },
};
</script>
<style lang="sass" scoped>
$error-color: red
$label-color: #aaa
$base-space: 4px

.text-field
  font-size: 14px
  display: flex
  flex-direction: column
  margin-bottom: $base-space * 4
  input
    border: none
    appearance: none
    background: #f2f2f2
    padding: $base-space * 3
    border-radius: 3px
    width: 250px
    font-size: 14px
  &:not(.error)
    input:focus, input:focus-visible
      outline-color: $label-color

  label
    color: $label-color
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    text-transform: capitalize
    margin-bottom: $base-space * 2
  p
    color: $error-color
    margin-top: $base-space
    margin-bottom: 0
  &.error
    input
      border: 1px solid $error-color
      &:focus, &:focus-visible
        outline-color: $error-color
        border: none
  &.error
    label
      color: $error-color
</style>
