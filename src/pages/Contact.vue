<template>
  <section class="section">
    <div class="container">
      <Title>Contact Us</Title>
    </div>
  </section>
</template>

<script>
import Title from '@/components/Title.vue';

export default {
  name: 'Contact',

  components: {
    Title
  }
};
</script>

<style lang="scss" scoped>
h1 {
  &.title {
    text-decoration: underline overline;
  }
}
</style>
