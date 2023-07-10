<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: 'AppPhotoDetail',
    data() {
        return {
            photo: null,
            
        }
    },
    created() {
         // Chiamata API per ottenere i dettagli della foto basata sull'ID
        const photoId = this.$route.params.id;
        this.fetchPhoto(photoId);

    },
    methods: {
        async fetchPhoto(photoId) {
           try {
               const response = await axios.get(`http://localhost:8080/api/v1/photos/${photoId}`);
               this.photo = response.data;
           } catch (error) {
               console.log(error);
           }
        }
    },
    computed: {
        imageURL() {
            return store.imageURL;
        }
    }
}
</script>

<template>
    <div class="container">
    <h2>Photo Details</h2>
    <div v-if="photo">
      <h3>{{ photo.title }}</h3>
      <p>{{ photo.description }}</p>
      <div class="card" style="width: 18rem;">
        <img :src="imageURL" alt="Photo" />
      </div>
    
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
    <router-link to="/" class="btn btn-primary">Back to Photos</router-link>
  </div>
</template>