<template>
  <div class="app">
    <div class="container">
      <real-digital-form action="https://httpbin.org/post" method="POST">
        <real-digital-textfield name="name" validation="[a-z]+" />
        <real-digital-textfield name="phone" validation="[0-9]+" />
        <real-digital-textfield name="subject" validation="[0-9]+" />
        <real-digital-button> Submit </real-digital-button>
      </real-digital-form>
    </div>
  </div>
</template>

<script>
import RealDigitalTextfield from "@/components/text-field/RealDigitalTextfield.vue";
import RealDigitalButton from "@/components/button/RealDigitalButton.vue";
import RealDigitalForm from "@/components/form/RealDigitalForm.vue";
export default {
  name: "App",
  components: {
    RealDigitalTextfield,
    RealDigitalButton,
    RealDigitalForm,
  },
};
</script>
<style lang="sass" scoped>
@import '@/assets/variables.sass'

.app
  display: flex
  justify-content: center
  align-items: center
  height: 100%
  background-color: #4dbecf5e
.container
  background-color: white
  padding: $base-space * 4
  max-width: $input-width + $base-space * 6
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)
</style>
