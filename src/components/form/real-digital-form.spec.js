import { shallowMount } from "@vue/test-utils";
import RealDigitalForm from "@/components/form/RealDigitalForm.vue";
import RealDigitalButton from "@/components/button/RealDigitalButton.vue";

describe("form", () => {
  it("validates inputs on submit", async () => {
    const mockValidate = jest.fn();
    const wrapper = shallowMount(RealDigitalForm, {
      slots: {
        default:
          "<real-digital-textfield /> <real-digital-button> submit</real-digital-button/>",
      },
      components: {
        "real-digital-textfield": {
          name: "real-digital-textfield",
          template: "<div></div>",
          methods: {
            validate: mockValidate,
          },
        },
        "real-digital-button": RealDigitalButton,
      },
    });
    const button = wrapper.findComponent(RealDigitalButton);
    await button.trigger("click");
    expect(mockValidate.mock.calls.length).toBe(1);
  });
});
