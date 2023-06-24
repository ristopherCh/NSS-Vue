<script setup>
import { favorites } from '../stores/favoritesStore'
import RecipeListItem from './RecipeListItem.vue'
</script>

<template>
  <Fieldset>
    <RecipeListItem
      v-for="recipe in favorites"
      :key="recipe.recipeId"
      :image-url="recipe.imageUrl"
      :recipe-id="recipe.recipeId"
      :title="recipe.title"
      :categories="recipe.categories"
      :minutes="recipe.minutes"
      :servings="recipe.servings"
      :url="recipe.url"
    />
  </Fieldset>
</template>

<style scoped></style>
