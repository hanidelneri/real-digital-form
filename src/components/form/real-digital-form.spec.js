import { shallowMount } from "@vue/test-utils";
import RealDigitalForm from "@/components/form/RealDigitalForm.vue";
import RealDigitalButton from "@/components/button/RealDigitalButton.vue";
import axios from "axios";

jest.mock("axios");

function getWrapper(mockValidate) {
  const wrapper = shallowMount(RealDigitalForm, {
    slots: {
      default:
        "<real-digital-textfield name='test' /> <real-digital-button> submit</real-digital-button/>",
    },
    propsData: {
      action: "",
    },
    components: {
      "real-digital-textfield": {
        name: "real-digital-textfield",
        render(createElement) {
          return createElement("div");
        },
        props: {
          name: {
            type: String,
          },
        },
        data() {
          return {
            value: 2,
          };
        },
        methods: {
          validate: mockValidate,
        },
      },
      "real-digital-button": RealDigitalButton,
    },
  });
  return wrapper;
}

async function submit(wrapper) {
  const button = wrapper.findComponent(RealDigitalButton);
  await button.trigger("click");
}

describe("form", () => {
  it("validates inputs on submit", async () => {
    const mockValidate = jest.fn();
    const wrapper = getWrapper(mockValidate);
    await submit(wrapper);
    expect(mockValidate.mock.calls.length).toBe(1);
  });

  it("dose nothing when textfields are invalid", async () => {
    const mockValidate = jest.fn();
    mockValidate.mockImplementation(() => false);
    const wrapper = getWrapper(mockValidate);
    await submit(wrapper);
    expect(wrapper.emitted("onResponse")).toBeFalsy();
  });

  it("emits onSubmit when validation is successful", async () => {
    const mockValidate = jest.fn();
    mockValidate.mockImplementation(() => true);
    const wrapper = getWrapper(mockValidate);
    await submit(wrapper);
    expect(wrapper.emitted("onSubmit")[0][0]).toMatchObject({
      test: 2,
    });
  });
  it("emits onResponse with response body as payload when validation is successful", async () => {
    axios.mockImplementation(() => ({
      json: {
        test: 2,
      },
    }));
    const mockValidate = jest.fn();
    mockValidate.mockImplementation(() => true);
    const wrapper = getWrapper(mockValidate);
    await submit(wrapper);
    expect(wrapper.emitted("onResponse")[0][0]).toMatchObject({
      test: 2,
    });
  });
});
