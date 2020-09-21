import { h } from "vue";

export default {
  name: "RenderFn2",
  render() {
    return this.list.map(item => {
      return h(
        "div",
        {
          key: item.id,
        },
        item.text,
      );
    });
  },
};
