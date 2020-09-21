<template>
  <div class="page-stack">
    <my-stack-jsx size="1">
      <div>Hello</div>
      <my-stack-jsx size="2">
        <div>Hello</div>
        <div>Hello</div>
        <my-stack-jsx size="3">
          <div>Hello</div>
          <div>Hello</div>
        </my-stack-jsx>
      </my-stack-jsx>
    </my-stack-jsx>
  </div>
</template>

<script>
import MyStackJsx from "@/components/my-stack-jsx";

export default {
  name: "PageStack",
  components: {
    MyStackJsx,
  },
};
</script>

<style lang="scss">
.m-1 {
  margin: 0.25rem;
}
.m-2 {
  margin: 0.5rem;
}
.m-3 {
  margin: 0.75rem;
}
</style>
