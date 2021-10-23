<template>
  <div>
    <real-digital-form action="https://httpbin.org/post" method="POST">
      <real-digital-textfield name="name" validation="[a-z]+" />
      <real-digital-textfield name="phone" validation="[0-9]+" />
      <real-digital-textfield name="subject" />
      <real-digital-button> Submit </real-digital-button>
    </real-digital-form>
  </div>
</template>

<script>
import RealDigitalTextfield from "@/components/text-field/RealDigitalTextfield.vue";
import RealDigitalButton from "@/components/button/RealDigitalButton.vue";
import RealDigitalForm from "@/components/form/RealDigitalForm.vue";
export default {
  name: "HelloWorld",
  components: {
    RealDigitalTextfield,
    RealDigitalButton,
    RealDigitalForm,
  },
  props: {
    msg: String,
  },
};
</script>
