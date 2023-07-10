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
        async submitForm() {
            try {
                const response = await axios.post('http://localhost:8080/api/v1/photos/submit-form', {
                    email: this.email,
                    message: this.message
                });

                // Gestisci la risposta della chiamata API
                console.log(response.data);

            } catch (error) {
                console.log(error);
                // Gestisci l'errore della chiamata API
            }
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
        <button type="submit" class="btn btn-primary mt-2">Invia</button>
        </form>

        <div class="mt-5">
            <button class="btn btn-dark">
                <router-link to="/" class="nav-link">Go back</router-link>
            </button>
        </div>
  </div>
</template>