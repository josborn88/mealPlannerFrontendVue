<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <RandomMeal/>
  </div>
</template>

<script>
// @ is an alias to /src
import RandomMeal from '@/components/RandomMeal.vue';

export default {
  name: 'Home',
  components: {
    RandomMeal,
  },
};
</script>
