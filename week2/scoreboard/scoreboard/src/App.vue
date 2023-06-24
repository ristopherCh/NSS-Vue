<script setup>
import { ref, computed } from "vue";
import Scorebox from "./components/Scorebox.vue";

const team1Score = ref(0);
const team2Score = ref(0);

const team1Scored = (newScore) => {
  team1Score.value = newScore;
};
const team2Scored = (newScore) => {
  team2Score.value = newScore;
};

const scoreDifference = computed(() => {
  return Math.abs(team1Score.value - team2Score.value);
});

const team1IsWinning = computed(() => {
  return team1Score.value - team2Score.value > 0;
});

const team2IsWinning = computed(() => {
  return team1Score.value - team2Score.value < 0;
});

const whoIsWinning = computed(() => {
  if (team1IsWinning.value) {
    return `Team 1 is leading by ${scoreDifference.value} point`;
  }
  if (team2IsWinning.value) {
    return `Team 2 is leading by ${scoreDifference.value} point`;
  } else {
    return "The game is currently tied";
  }
});
</script>

<template>
  <div>
    <h1 class="is-size-1 has-text-centered has-text-info">
      <span :class="{ hot: team1IsWinning }">Team 1</span> vs.
      <span :class="{ hot: team2IsWinning }">Team 2</span>
    </h1>
    <h3 class="is-size-3 has-text-centered white">
      {{ whoIsWinning }}
    </h3>

    <div class="is-flex is-justify-content-space-around">
      <div class="width-35 m-5">
        <Scorebox class="" @scoreChange="team1Scored" />
      </div>
      <div class="width-35 m-5">
        <Scorebox class="" @scoreChange="team2Scored" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.width-35 {
  width: 35%;
}
.white {
  color: white;
}
.hot {
  color: yellow;
}
</style>
