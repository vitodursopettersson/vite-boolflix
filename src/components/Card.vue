<script>
import { store } from '../store';
export default {
    name: 'Card',
    data() {
        return {
            store
        }
    },
    props: ['title', 'originalTitle', 'lang', 'ratings', 'poster']
}

</script>

<template>
    <div>
        <img :src="store.apiConfig.posterPath + poster" alt="">
        <h1>{{ title }}</h1>
        <h3>{{ originalTitle }}</h3>
        <h6>{{ lang }}</h6>
        <h6>{{ ratings }}</h6>
    </div>
</template>

<style scoped></style>