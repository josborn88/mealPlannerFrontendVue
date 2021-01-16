<template>
  <div>
    <div>
      <h1>Plan Your Meals</h1>
      <form>
        <label>How Many Meals?</label>
        <input type="number" v-model="numberOfDinners">
      </form>
      <button v-on:click.prevent="generateMealPlan(numberOfDinners)">Generate Plan</button>
    <div v-if="mealPlan.length > 0">
      <h1>Meals</h1>
        <p v-for="meal in mealPlan" :key="meal.id">{{ meal.title }}</p>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      mealPlan: [],
      numberOfDinners: 5,
    };
  },
  methods: {
    generateMealPlan(numberOfDinners) {
      console.log(numberOfDinners);
      axios
        .get(`http://localhost:8000/mealPlan/${numberOfDinners}`)
        .then((response) => {
          console.log(response);
          this.mealPlan = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
</style>
