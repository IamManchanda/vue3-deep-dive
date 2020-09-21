import { h } from "vue";

export default {
  name: "RenderFn1",
  render() {
    return this.ok
      ? h(
          "div",
          {
            id: "hello",
          },
          [h("span", "Hello World")],
        )
      : this.otherCondition
      ? h("p", "other branch")
      : h("span");
  },
};
