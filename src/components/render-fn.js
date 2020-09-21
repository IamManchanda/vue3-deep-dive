import { h } from "vue";

export default {
  name: "HelloWorldRender",
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
