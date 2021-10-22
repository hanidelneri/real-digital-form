import { mount } from "@vue/test-utils";
import RealDigitalButton from "@/components/button/RealDigitalButton.vue";

describe("button", () => {
  it("calls parent submit method on click", async () => {
    const mockSubmit = jest.fn();
    const wrapper = mount(RealDigitalButton, {
      parentComponent: {
        template: "<div></div>",
        methods: {
          submit: mockSubmit,
        },
      },
    });
    await wrapper.trigger("click");
    expect(mockSubmit.mock.calls.length).toBe(1);
  });
});
