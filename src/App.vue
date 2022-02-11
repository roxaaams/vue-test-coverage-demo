<template>
  <div>
    <header>
      <h1>Hello</h1>
    </header>

    <main>
      <HelloWorld :name="name" />
    </main>
  </div>
</template>

<script>
import HelloWorld from '@/views/HelloWorld.vue';

export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      name: 'World User',
    };
  },
};
</script>

<style lang="scss"></style>
