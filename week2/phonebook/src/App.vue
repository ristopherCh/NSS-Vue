<script setup>
import { ref } from 'vue'
import ContactForm from './components/ContactForm.vue'
import ContactList from './components/ContactList.vue'
import sampleData from './sampleData.js'

const contacts = ref(JSON.parse(localStorage.getItem('contacts')))

const addContact = (contact) => {
  contacts.value = [...contacts.value, contact]
  setContactsInLocalStorage()
}
const removeContact = (contact) => {
  contacts.value = contacts.value.filter(
    (eachContact) => eachContact.phoneNumber !== contact.phoneNumber
  )
  setContactsInLocalStorage()
}
const setContactsInLocalStorage = () => {
  localStorage.setItem('contacts', JSON.stringify(contacts.value))
}
</script>

<template>
  <div>
    <h1 class="is-size-1 has-text-centered has-text-info">Vue Phonebook</h1>
    <div class="container px-4">
      <div class="columns">
        <div class="column">
          <ContactForm @submit="addContact" />
        </div>
        <div class="column">
          <ContactList @remove="removeContact" :contacts="contacts" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
