<template>
  <section class="section">
    <div class="container">
      <Title>Homepage</Title>
    </div>
  </section>
</template>

<script>
import Title from '@/components/Title.vue';

export default {
  name: 'Home',

  components: {
    Title
  }
};
</script>

<style>
.section {
  background: #eff0eb;
}
</style>

<style lang="scss" scoped>
h1 {
  &.title {
    text-decoration: underline;
  }
}
</style>
