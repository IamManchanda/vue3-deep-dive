<template>
  <div class="page-stack">
    <my-stack size="1">
      <div>Hello</div>
      <my-stack size="2">
        <div>Hello</div>
        <div>Hello</div>
        <my-stack size="3">
          <div>Hello</div>
          <div>Hello</div>
        </my-stack>
      </my-stack>
    </my-stack>
  </div>
</template>

<script>
import MyStack from "@/components/my-stack";

export default {
  name: "PageStack",
  components: {
    MyStack,
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
