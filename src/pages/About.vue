<template>
  <section class="section">
    <div class="container">
      <Title>About Us</Title>
    </div>
  </section>
</template>

<script>
import Title from '@/components/Title.vue';

export default {
  name: 'About',

  components: {
    Title
  }
};
</script>

<style lang="scss" scoped>
h1 {
  &.title {
    text-decoration: underline dotted;
  }
}
</style>
