<script>



export default {
    name: 'AppSearch',
    data() {
        return {
         searchKeyword:''
          
        }
    },
    components: {
      
    },
    methods: {
        submitSearch() {
      this.$emit('searchPhotos', this.searchKeyword);
        },
        clearSearch() {
      this.searchKeyword = '';
      this.$emit('searchPhotos', '');
    },
    }
}
</script>

<template>
    <div class="container mt-4 pb-5">
      <div class="container-fluid">
        <form class="d-flex" role="search"  @submit.prevent="submitSearch">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            v-model="searchKeyword"
          />
          <button class="btn btn-outline-warning m-1" type="submit">Search</button>
          <button class="btn btn-outline-dark m-1" type="button" @click="clearSearch">Clear</button>
        </form>
      </div>
    </div>
</template>