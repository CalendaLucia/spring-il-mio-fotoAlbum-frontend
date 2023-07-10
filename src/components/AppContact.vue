<script>
import axios from 'axios';
export default {
  data() {
    return {
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      axios.post('http://localhost:8080/api/contact', {
        email: this.email,
        message: this.message
      })
      .then(response => {
        alert('Messaggio inviato con successo!');
        this.email = '';
        this.message = '';
      })
      .catch(error => {
        alert('Si è verificato un errore durante l\'invio del messaggio.');
        console.error(error);
      });
    }
  }
};
</script>

<template>
    <div class="container">
    <h1>Form di Contatto</h1>
    <form id="contactForm" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="message">Messaggio</label>
        <textarea class="form-control" id="message" rows="5" v-model="message" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Invia</button>
    </form>
  </div>
</template>