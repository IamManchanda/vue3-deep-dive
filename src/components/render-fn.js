import { h } from "vue";

export default {
  name: "RenderFn",
  render() {
    return h(
      "div",
      {
        id: "hello",
      },
      [h("span", "Hello World")],
    );
  },
};
