<script>
import AppGetPhoto from './ApiCalls/AppGetPhoto.vue';
export default {
    name:'AppMain',
    data() {
        return {
            
        }
    },
    components: {
        AppGetPhoto
    }
}
</script>

<template>
    <main>
        <AppGetPhoto/>
    </main>
</template>