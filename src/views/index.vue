<template>
  <div class="home">
    <div>
      <hello-world-render />
      <hr />
      <hello-world-render-with-jsx />
    </div>
  </div>
</template>

<script>
import HelloWorldRender from "@/components/hello-world/render.js";
import HelloWorldRenderWithJsx from "@/components/hello-world/render-with-jsx.js";

export default {
  name: "PageHome",
  components: {
    HelloWorldRender,
    HelloWorldRenderWithJsx,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
