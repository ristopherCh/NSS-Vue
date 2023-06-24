<script setup>
import ContactListItem from './ContactListItem.vue'
const emit = defineEmits(['remove'])

const props = defineProps(['contacts'])
const removeContact = (contact) => {
  emit('remove', contact)
}
</script>

<template>
  <div class="panel is-success">
    <div class="panel-heading">Contacts</div>
    <div class="panel-block is-flex is-flex-direction-column is-align-items-stretch">
      <div v-for="contact in props.contacts" :key="contact.phoneNumber">
        <ContactListItem @remove="removeContact" :contact="contact" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
