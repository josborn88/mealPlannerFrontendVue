<template>
  <div class="hello">
    <h1>Random Meal From Database</h1>
    <div class="fm-data">
      <label for="lastMadeDate" class="fm-label">Date before:</label>
      <input
        type="text"
        id="lastMadeDate"
        placeholder="YYYY-MM-DD"
        class="fm-txt"
        v-model="lastMade"
      />
    </div>
    <div class="btn-block">
      <button v-on:click.prevent="getRandomMeal(lastMade)" class="btn">
        Get Random Meal
      </button>
    </div>
    <h1>Rando Meal to cook: {{ randomTitle }}</h1>
    <div class="btn-block">
      <div v-if="randomMeal">
        <button v-on:click.prevent="makeMeal(randomMeal.id)" class="btn">
          Make this meal
        </button>
        <h2>Meal Ingredients</h2>
        <p>{{ randomMeal.ingredients }}</p>
        <h3>Prep Time</h3>
        <p>{{ randomMeal.prepTime }} minutes</p>
        <h3>Cook Time</h3>
        <p>{{ randomMeal.cookTime }} minutes</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      meals: [],
      makingMeal: true,
      newMeal: {
        title: '',
        prepTime: 0,
        cookTime: 0,
        genre: '',
        ingredients: '',
      },
    };
  },
  props: {
    randomMeal: JSON,
    randomTitle: String,
    lastMade: String,
  },
  methods: {
    getAllMeals() {
      axios
        .get('http://localhost:8000/allMeals')
        .then((response) => {
          this.msg = response.data[0].title;
          this.meals = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getRandomMeal(lastMade) {
      let useDate = lastMade;
      if (lastMade === undefined) {
        const ourDate = new Date();
        const pastDate = ourDate.getDate() - 7;
        ourDate.setDate(pastDate);
        useDate = ourDate.toISOString().split('T')[0];
      }
      axios
        .get(`http://localhost:8000/mealBeforeDate/${useDate}`)
        .then((response) => {
          this.randomTitle = response.data.title;
          this.randomMeal = response.data;
        });
    },
    makeMeal(id) {
      axios.get(`http://localhost:8000/makeMeal/${id}`).then((response) => {
        console.log(response.data);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
