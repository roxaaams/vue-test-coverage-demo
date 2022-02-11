<template>
  <div>
    <h3>Welcome to Vue Test Coverage Demo, {{ name }} :)</h3>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: ['name'],
});
</script>
