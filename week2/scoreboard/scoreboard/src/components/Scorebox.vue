<script setup>
import { ref } from "vue";

const score = ref(0);
const minus = () => {
  if (score.value !== 0) {
    score.value--;
    emit("scoreChange", score.value);
  }
};
const plus = () => {
  score.value++;
  emit("scoreChange", score.value);
};
const emit = defineEmits(["scoreChange"]);
</script>

<template>
  <div
    class="has-background-primary has-text-centered has-text-weight-bold p-5"
  >
    <div class="score">{{ score }}</div>
    <div class="actions">
      <button class="button m-2 scoreButton is-size-4" @click="minus">-</button>
      <button class="button m-2 scoreButton is-size-4" @click="plus">+</button>
    </div>
  </div>
</template>

<style scoped></style>
