import { h } from "vue";

export default {
  name: "HelloWorldRender",
  render() {
    return h(
      "div",
      {
        id: "hello-render",
      },
      [h("span", "Hello Render World")],
    );
  },
};
