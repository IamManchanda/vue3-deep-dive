<template>
  <div class="page-index">
    <div>
      <hello-world-render />
      <hr />
      <hello-world-render-with-jsx />
    </div>
  </div>
</template>

<script>
import HelloWorldRender from "@/components/hello-world/render";
import HelloWorldRenderWithJsx from "@/components/hello-world/render-with-jsx";

export default {
  name: "PageIndex",
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
