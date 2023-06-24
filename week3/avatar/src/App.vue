<script setup>
import { ref, watch } from 'vue'
import Dropdown from 'primevue/dropdown'

const baseURL = 'https://api.dicebear.com/6.x/personas/svg?seed=Angel&size=400'
const avatarURL = ref(baseURL)
const selectedSkinColor = ref('')
const selectedHairstyle = ref('')
const selectedHairColor = ref('')
const selectedEyes = ref('')
const selectedFacialHair = ref('')

const hairstyles = ref([
  'Bald',
  'Balding',
  'Beanie',
  'Bob Bangs',
  'Bob Cut',
  'Bun Undercut',
  'Buzzcut',
  'Cap',
  'Curly',
  'Curly Bun',
  'Curly High Top',
  'Extra Long',
  'Fade',
  'Long',
  'Mohawk',
  'Pigtails',
  'Short Combover',
  'Short Combover Chops',
  'Side Shave',
  'Straight Bun'
])

const hairstylesTranslate = {
  Bald: 'bald',
  Balding: 'balding',
  Beanie: 'beanie',
  'Bob Bangs': 'bobBangs',
  'Bob Cut': 'bobCut',
  'Bun Undercut': 'bunUndercut',
  Buzzcut: 'buzzcut',
  Cap: 'cap',
  Curly: 'curly',
  'Curly Bun': 'curlyBun',
  'Curly High Top': 'curlyHighTop',
  'Extra Long': 'extraLong',
  Fade: 'fade',
  Long: 'long',
  Mohawk: 'mohawk',
  Pigtails: 'pigtails',
  'Short Combover': 'shortCombover',
  'Short Combover Chops': 'shortComboverChops',
  'Side Shave': 'sideShave',
  'Straight Bun': 'straightBun'
}

const facialHairsTranslate = {
  'Beard Mustache': 'beardMustache',
  Goatee: 'goatee',
  Pyramid: 'pyramid',
  Shadow: 'shadow',
  'Soul Patch': 'soulPatch',
  Walrus: 'walrus'
}

const eyes = ref(['Glasses', 'Happy', 'Open', 'Sleep', 'Sunglasses', 'Wink'])

const eyesTranslate = {
  Glasses: 'glasses',
  Happy: 'happy',
  Open: 'open',
  Sleep: 'sleep',
  Sunglasses: 'sunglasses',
  Wink: 'wink'
}

const facialHairs = ref(['Beard Mustache', 'Goatee', 'Pyramid', 'Shadow', 'Soul Patch', 'Walrus'])

watch(
  [selectedHairstyle, selectedSkinColor, selectedEyes, selectedFacialHair, selectedHairColor],
  () => {
    updateAvatarURL()
  }
)

function updateAvatarURL() {
  let newURL = baseURL
  if (selectedHairstyle.value) {
    newURL += `&hair=${hairstylesTranslate[selectedHairstyle.value]}`
  }
  if (selectedHairColor.value) {
    newURL += `&hairColor=${selectedHairColor.value.substring(1)}`
    console.log(selectedSkinColor.value)
  }
  if (selectedSkinColor.value) {
    newURL += `&skinColor=${selectedSkinColor.value.substring(1)}`
  }
  if (selectedEyes.value) {
    newURL += `&eyes=${eyesTranslate[selectedEyes.value]}`
  }
  if (selectedFacialHair.value) {
    newURL += `&facialHair=${
      facialHairsTranslate[selectedFacialHair.value]
    }&facialHairProbability=100`
  }
  console.log(newURL)
  avatarURL.value = newURL
}
</script>

<template>
  <div class="">
    <h1 class="text-primary text-6xl text-center">Avatar Builder</h1>
    <div class="grid m-5 flex justify-content-center">
      <div class="col-2">
        <p class="whiteText">Skin Tone</p>
        <input type="color" v-model="selectedSkinColor" />
      </div>
      <div class="col-2">
        <p class="whiteText">Hairstyle</p>
        <Dropdown
          class="rounded"
          v-model="selectedHairstyle"
          :options="hairstyles"
          placeholder="Select"
        />
      </div>
      <div class="col-2">
        <p class="whiteText">Hair Color</p>
        <input type="color" v-model="selectedHairColor" />
      </div>
      <div class="col-2">
        <p class="whiteText">Eyes</p>
        <Dropdown class="rounded" v-model="selectedEyes" :options="eyes" placeholder="Select" />
      </div>
      <div class="col-2">
        <p class="whiteText">Facial Hair</p>
        <Dropdown
          class="rounded"
          v-model="selectedFacialHair"
          :options="facialHairs"
          placeholder="Select"
        />
      </div>
    </div>
    <div class="flex justify-content-center align-items-center flex-column">
      <img :src="avatarURL" alt="avatar" />
      <a :href="avatarURL" class="whiteText" target="_blank">Go to image</a>
    </div>
  </div>
</template>

<style scoped>
.whiteText {
  color: white;
}
.rounded {
  border-radius: 10px;
}
</style>
