<template>
  <div>
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <form novalidate onsubmit="return false">
      <slot />
    </form>
  </div>
</template>
<script>
import { REAL_DIGITAL_FORM, REAL_DIGITAL_TEXTFIELD } from "@/components/names";
import axios from "axios";
export default {
  name: REAL_DIGITAL_FORM,
  props: {
    action: {
      type: String,
      required: true,
    },
    method: {
      type: String,
      default: "POST",
    },
  },
  data() {
    return {
      validationStatus: [],
      errorMessage: "",
    };
  },
  computed: {
    isValid() {
      return this.validationStatus.every((status) => status);
    },
  },
  methods: {
    async submit() {
      try {
        this.setValidationStatus();
        if (this.isValid) {
          const values = this.getValues();
          this.$emit("onSubmit", values);
          const response = await axios({
            method: this.method,
            url: this.action,
            data: values,
          });
          this.resetErrorMessage();
          this.$emit("onResponse", response.json);
        }
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
    setValidationStatus() {
      this.validationStatus = this.getInputs().map((child) => child.validate());
    },
    getInputs() {
      return this.$children.filter(
        (child) => child.$options.name === REAL_DIGITAL_TEXTFIELD
      );
    },
    getValues() {
      return this.getInputs()
        .map((input) => ({ [input.name]: input.value }))
        .reduce((current, acc) => ({ ...acc, ...current }), {});
    },
    resetErrorMessage() {
      this.errorMessage = "";
    },
  },
};
</script>
