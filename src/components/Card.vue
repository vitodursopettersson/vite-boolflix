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
        <h6>{{ ratings }}</h6>
    </div>
</template>

<style scoped></style>