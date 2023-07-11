<script>

//importo libreria axios
import axios from 'axios';
import { store } from '../../store';
import AppSearch from '../AppSearch.vue';

export default {
    name: "AppGetPhoto",
    data() {
        return {
     searchKeyword:'',
            photos: [],


        }
    },
    components: {
        AppSearch
    },

    // Solitamente, si sceglie di recuperare i dati da reperire via API il prima possibile.
    // Il primo hook in cui possiamo far partire la chiamata è created()
    created() {
        this.fetchPhotos();
    },
    methods: {
        reloadPage() {
      location.reload();
    },
        async fetchPhotos() {
            try {
                //aggiungo i parametri
                const params = {
                  keyword: this.searchKeyword,
                    visible: true,
                };
            
                const response = await axios.get('http://localhost:8080/api/v1/photos', { params });
                console.log(response);

                const photosWithImageURL = await Promise.all(response.data.map(async photo => {
                    const imageURL = await this.createImageURL(photo.id);
                    return { ...photo, imageURL };
                }));

                this.photos = photosWithImageURL;
                store.imageURL = this.photos[0]?.imageURL || '';

                console.log(this.photos);

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
        searchPhotos(keyword) {
            this.searchKeyword = keyword;
            this.fetchPhotos();
        },
        
     
    },
    computed: {
        filteredPhotos() {
            if (this.searchKeyword) {
                return this.photos.filter((photo) =>
                    photo.title.toLowerCase().includes(this.searchKeyword.toLowerCase())
                );
            }
            return this.photos;
        }
    }
  
 
}

</script>

<template>
    <AppSearch @searchPhotos="searchPhotos"/>

    <div class="container text-center">
        <button class="btn btn-dark" @click="reloadPage">Reload</button>
    </div>

   
    
    <div class="container-fluid mt-5 p-2 text-center">
        <div class="row p-5">
            <div class="col-3" v-for="photo in photos" :key="photo.id">
              <div class="profile-card">
                <div class="card-image">
                    <img :src="photo.imageURL" class="img img-responsive"/>
                </div>
              </div>
              <div class="card  bg-light ">
                    <h5 class="card-title">{{photo.title }}</h5>
                    <p class="card-text">{{photo.description}}</p>
                    <router-link :to="{ name: 'details', params: { id: photo.id}}" class="btn btn-dark">View Details</router-link>
                </div>
            </div>
        </div>
    </div>
  
    

</template>

<style lang="scss" scoped>

.profile-card {
        max-width: 300px;
        background-color: #FFF;
        box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
        background-position: center;
        overflow: hidden;
        position: relative;
        margin: 10px auto;
        cursor: pointer;
        border-radius: 10px;
        height: 400px;

        img {
        transition: all linear 0.25s;
        height: 400px;
         width: 100%;
        object-fit: cover;
    }

    &:hover img {
        filter: grayscale(100%);
    }

    }

 


</style>
