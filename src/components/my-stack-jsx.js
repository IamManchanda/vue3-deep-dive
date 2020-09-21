export default {
  props: {
    size: {
      type: Number,
      default: 1,
    },
  },
  name: "MyStackJsx",
  render() {
    const slot = this.$slots.default ? this.$slots.default() : [];
    return (
      <div class="stack">
        {slot.map(child => (
          <div class={`m-${this.$props.size}`}>{child}</div>
        ))}
      </div>
    );
  },
};
