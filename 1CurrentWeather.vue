<script setup>
import { ref } from "vue";

const msg = ref("Get Weather");

const location = ref("");
const weatherDescription = ref("");
const temperature = ref("");
const latitude = ref("");
const longitude = ref("");
const weatherCode = ref("");
const weatherReport = ref("");
const temperatureReport = ref("");
const weatherLookup = {
  0: "Clear sky",
  "1, 2, 3": "Mainly clear, partly cloudy, and overcast",
  "45, 48": "Fog and depositing rime fog",
  "51, 53, 55": "Drizzle: Light, moderate, and dense intensity",
  "56, 57": "Freezing Drizzle: Light and dense intensity",
  "61, 63, 65": "Rain: Slight, moderate and heavy intensity",
  "66, 67": "Freezing Rain: Light and heavy intensity",
  "71, 73, 75": "Snow fall: Slight, moderate, and heavy intensity",
  77: "Snow grains",
  "80, 81, 82": "Rain showers: Slight, moderate, and violent",
  "85, 86": "Snow showers slight and heavy",
  95: "Thunderstorm: Slight or moderate",
  "96, 99": "Thunderstorm with slight and heavy hail",
};

function setWeather() {
  for (const key in weatherLookup) {
    const codes = key.split(",").map((item) => item.trim());
    if (codes.includes(String(weatherCode.value))) {
      weatherDescription.value = weatherLookup[key];
      break;
    }
  }
}

function showPosition(position) {
  latitude.value = position.coords.latitude;
  longitude.value = position.coords.longitude;
  runFetch();
}

function runFetch() {
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude.value}&longitude=${longitude.value}&current_weather=true&temperature_unit=fahrenheit`
  )
    .then((res) => res.json())
    .then((data) => {
      temperature.value = data.current_weather.temperature;
      weatherCode.value = data.current_weather.weathercode;
      setWeather();
    });
}

function onClick(buttonInput) {
  location.value = buttonInput;
  if (location.value === "Los Angeles") {
    latitude.value = 34.05;
    longitude.value = -118.24;
  }
  if (location.value === "Nashville") {
    latitude.value = 36.16;
    longitude.value = -86.78;
  }
  if (location.value === "New York") {
    latitude.value = 40.71;
    longitude.value = -74;
  }
  if (location.value === "Current Location") {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    runFetch();
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="onClick('Los Angeles')">Los Angeles</button>
  <button @click="onClick('Nashville')">Nashville</button>
  <button @click="onClick('New York')">New York</button>
  <button @click="onClick('Current Location')">Current Location</button>
  <div v-if="weatherDescription.length > 0">
    <h2>
      {{ location }}
    </h2>
    <div><strong>Current weather:</strong> {{ weatherDescription }}</div>
    <div><strong>Current temp:</strong> {{ temperature }}</div>
  </div>
</template>

<style></style>
