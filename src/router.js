import { createRouter, createWebHistory } from "vue-router";
import AppGetPhoto from "./components/ApiCalls/AppGetPhoto.vue";
import AppPhotoDetail from './components/AppPhotoDetail.vue';
import AppContact from './components/AppContact.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppGetPhoto,
        },
 
      
        {
            path: '/photos/:id',
            name: 'details',
            component: AppPhotoDetail,
        },
        {
            path: '/contact',
            name: 'contact',
            component: AppContact,
          },
      
    ]
});

export { router };