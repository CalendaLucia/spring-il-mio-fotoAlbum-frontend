<script>
import axios from 'axios';

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
                const imageURL = await this.createImageURL(photoId);
                this.photo.imageURL = imageURL;
            } catch (error) {
                console.log(error);
            }
        },
        async createImageURL(photoId) {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/photos/${photoId}/image`, { responseType: 'blob' });
                const blob = new Blob([response.data], { type: response.headers['content-type'] });
                return URL.createObjectURL(blob);
            } catch (error) {
                console.log(error);
                return '';
            }
        },

    }
}
</script>

<template>
    <div class="container">
        <div class="row ">
            <div class="col-3" v-if="photo">
                <div class="profile-card">
                    <div class="card-image">
                        <img :src="photo.imageURL" alt="Photo" />
                    </div>
                </div>

                <div class="col-12">
                  <div class="card  bg-light ">
                    <h5 class="card-title">{{photo.title }}</h5>
                    <p class="card-text">{{photo.description}}</p>      
                  </div>
                </div>
            </div>
                 
            <div v-else>
            <p>Loading...</p>
            </div>
        </div>
  
   

    <router-link to="/" class="btn btn-darks mt-4">Back to Photos</router-link>
  </div>
</template>

<style lang="scss" scoped>

</style>