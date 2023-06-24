<script setup>
import { ref } from "vue";

const imageSrc = ref("");
const header = ref("Hello Frontend Devs");
const msg = ref("");

function clickHandle(buttonValue) {
  msg.value = `Good choice, ${buttonValue} is a great tool!`;
  if (buttonValue === "Angular") {
    imageSrc.value =
      "https://raw.githubusercontent.com/nashville-software-school/Vue-Workshop/main/assets/framework-picker-logos/angular_logo.png";
  } else if (buttonValue === "Vue") {
    imageSrc.value =
      "https://raw.githubusercontent.com/nashville-software-school/Vue-Workshop/main/assets/framework-picker-logos/vue_logo.png";
  } else if (buttonValue === "React") {
    imageSrc.value =
      "https://raw.githubusercontent.com/nashville-software-school/Vue-Workshop/main/assets/framework-picker-logos/react_logo.png";
  }
}
</script>

<template>
  <div class="centered">
    <h1>{{ header }}</h1>
    <h3>What is your favorite JS framework?</h3>
    <div>
      <button class="" @click="clickHandle('Angular')">Angular</button>
      <button class="" @click="clickHandle('Vue')">Vue</button>
      <button class="" @click="clickHandle('React')">React</button>
    </div>

    <p>
      {{ msg }}
    </p>
    <img :src="imageSrc" />
  </div>
</template>

<style>
.centered {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
