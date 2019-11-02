<template>
  <h1 class="title">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  name: 'Title'
};
</script>

<style lang="scss" scoped>
h1 {
  color: #41b883;
}
</style>
