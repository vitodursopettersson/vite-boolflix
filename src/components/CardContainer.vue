<script>
import { store } from '../store';
import Card from './Card.vue';
export default {
    name: 'CardContainer',
    components: {
        Card
    },
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <Card v-for="result in store.searchMovieResult" :title="result.title" :originalTitle="result.original_title"
        :lang="result.original_language" :ratings="result.vote_average" :poster="result.poster_path" />
</template>

<style scoped></style>