<script>

// Per passare da Composition API a Options API dobbiamo:
// 1. Rimuovere l'attributo setup da <script>
// 2. Aggiungere l'export default {}
// 3. Aggiungere la proprietà name nell'oggetto esportato che avrà come valore il nome del componente (opzionale, ma buona pratica)

// import { store } from './store'; POTREBBE SERVIRMI

// Passi per utilizzare sottocomponenti
// 1. Importazione

import AppHeader from './components/AppHeader.vue';


export default {
  name: "App",
  data() {
    return {
      // store
    }
  },
  components: {

    
  
    AppHeader,

 
   

  },
  methods: {

  }
};
</script>

<template>

     <AppHeader/>

      <router-view></router-view>

  

</template>

<style lang="scss">
@import './styles/main.scss';

</style>
