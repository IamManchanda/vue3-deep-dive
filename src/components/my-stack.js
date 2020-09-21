/* import { h } from "vue"; */

export default {
  props: {
    size: {
      type: Number,
      default: 1,
    },
  },
  name: "MyStack",
  render() {
    const slot = this.$slots.default ? this.$slots.default() : [];
    return (
      <div class="stack">
        {slot.map(child => (
          <div class={`m-${this.$props.size}`}>{child}</div>
        ))}
      </div>
    );
    /* return h(
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
    ); */
  },
};
