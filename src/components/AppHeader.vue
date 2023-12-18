<script>
import Search from './Search.vue';
export default {
    name: 'AppHeader',
    components: {
        Search,
    },
}

</script>

<template>
    <Search @keyup.enter="$emit('search')" />
</template>

<style scoped></style>