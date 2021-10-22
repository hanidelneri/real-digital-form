import { mount } from "@vue/test-utils";
import RealDigitalTextfield from "@/components/text-field/RealDigitalTextfield.vue";

describe("textfield", () => {
  it("shows no error message when validation prop is not passed", async () => {
    const wrapper = mount(RealDigitalTextfield, {
      propsData: { name: "test" },
      data() {
        return { value: "hello" };
      },
    });
    wrapper.vm.validate();
    await wrapper.vm.$nextTick();
    const error = wrapper.find('[data-testid="text-field-error"]');
    expect(error.exists()).toBe(false);
  });

  it("shows error message when input is invalid", async () => {
    const wrapper = mount(RealDigitalTextfield, {
      propsData: { name: "test", validation: "[0-9]+" },
      data() {
        return { value: "hello" };
      },
    });
    wrapper.vm.validate();
    await wrapper.vm.$nextTick();
    const error = wrapper.find('[data-testid="text-field-error"]');
    expect(error.exists()).toBe(true);
    expect(error.text()).toBe("test must follow the pattern [0-9]+");
  });

  it("shows no error message when input is valid", async () => {
    const wrapper = mount(RealDigitalTextfield, {
      propsData: { name: "test", validation: "[0-9]+" },
      data() {
        return { value: "123" };
      },
    });
    wrapper.vm.validate();
    await wrapper.vm.$nextTick();
    const error = wrapper.find('[data-testid="text-field-error"]');
    expect(error.exists()).toBe(false);
  });
});
