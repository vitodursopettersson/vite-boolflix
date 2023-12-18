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
        <h3 v-if="title !== originalTitle">{{ originalTitle }}</h3>
        <h6 v-if="lang === 'en'">🇬🇧 {{ lang }}</h6>
        <h6 v-else-if="lang === 'it'">🇮🇹 {{ lang }}</h6>
        <h6 v-else>{{ lang }}</h6>
        <div>
            <h6 v-if="Math.floor(ratings) === 10 || Math.floor(ratings) === 9">
                <font-awesome-icon icon="fa-solid fa-star" v-for="n in 5" />
            </h6>
            <h6 v-else-if="Math.floor(ratings) === 8 || Math.floor(ratings) === 7">
                <font-awesome-icon icon="fa-solid fa-star" v-for="n in 4" />
                <font-awesome-icon icon="fa-regular fa-star" />
            </h6>
            <h6 v-else-if="Math.floor(ratings) === 6 || Math.floor(ratings) === 5">
                <font-awesome-icon icon="fa-solid fa-star" v-for="n in 3" />
                <font-awesome-icon icon="fa-regular fa-star" v-for="n in 2" />
            </h6>
            <h6 v-else-if="Math.floor(ratings) === 4 || Math.floor(ratings) === 3">
                <font-awesome-icon icon="fa-solid fa-star" v-for="n in 2" />
                <font-awesome-icon icon="fa-regular fa-star" v-for="n in 3" />
            </h6>
            <h6 v-else-if="Math.floor(ratings) === 2 || Math.floor(ratings) === 1">
                <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-regular fa-star" v-for="n in 4" />
            </h6>
            <h6 v-else>
                <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5" />
            </h6>
        </div>
    </div>
</template>

<style scoped></style>