import { h } from "vue";

export default {
  name: "MyStack",
  props: {
    size: {
      type: Number,
      default: 1,
    },
  },
  render() {
    const slot = this.$slots.default ? this.$slots.default() : [];
    return h(
      "div",
      {
        class: "stack",
      },
      slot.map(child => {
        return h(
          "div",
          {
            class: `m-${this.$props.size}`,
          },
          [child],
        );
      }),
    );
  },
};
