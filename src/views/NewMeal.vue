<template>
  <div class="newMeal">
    <h1>This is an about page</h1>
    <h2>Save a new Recipie</h2>
    <form>
      <label>Meal Title</label>
      <input type="text" placeholder="Meal title" v-model="newMeal.title"/>
      <br>
      <label>Meal Genre</label>
      <input type="text" placeholder="Meal Genre" v-model="newMeal.genre"/>
      <br>
      <label>Meal Ingredients</label>
      <input type="text" placeholder="Meal Ingredients" v-model="newMeal.ingredients"/>
      <br>
      <label>Prep Time</label>
      <input type="number" placeholder="Prep Time" v-model="newMeal.prepTime"/>
      <br>
      <label>Cook Time</label>
      <input type="number" placeholder="Meal title" v-model="newMeal.cookTime"/>
    </form>
    <button v-on:click.prevent="saveMeal(newMeal)">Save Meal</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newMeal: {
        title: '',
        prepTime: 0,
        cookTime: 0,
        genre: '',
        ingredients: '',
      },
    };
  },
  methods: {
    saveMeal(meal) {
      axios
        .post('http://localhost:8000/saveNewMeal', meal)
        .then((response) => {
          console.log(response.data);
          this.clearMeal();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clearMeal() {
      this.newMeal.title = '';
      this.newMeal.prepTime = 0;
      this.newMeal.cookTime = 0;
      this.newMeal.genre = '';
      this.newMeal.ingredients = '';
    },
  },
};
</script>

<style>

</style>
