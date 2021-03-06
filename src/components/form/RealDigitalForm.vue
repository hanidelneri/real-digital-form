<template>
  <div>
    <transition name="fade">
      <p v-if="errorMessage" class="error">
        {{ errorMessage }}
      </p>
    </transition>
    <transition name="fade">
      <p v-if="isSuccessful" class="success">
        Successfully submitted the form!
      </p>
    </transition>
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
      isSuccessful: false,
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
          this.isSuccessful = false;
          const response = await axios({
            method: this.method,
            url: this.action,
            data: values,
          });
          this.resetErrorMessage();
          this.isSuccessful = true;
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
<style lang="sass" scoped>
@import '@/assets/variables.sass'

.error
  color: $error-color
.success
  color: $success-color
</style>
