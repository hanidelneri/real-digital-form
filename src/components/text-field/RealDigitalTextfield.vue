<template>
  <div>
    <label :for="name">
      {{ name }}
    </label>
    <input :id="name" v-model="value" />
    {{ showErrorMessage }}
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
