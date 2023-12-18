<script>
import { store } from '../store';
export default {
    name: 'SearchComponent',
    data() {
        return {
            store
        }
    }
}

</script>

<template>
    <input type="text" placeholder="Search..." v-model="store.searchKey">
</template>

<style lang="scss" scoped>
input {
    width: 80%;
    padding: 14px 24px;
    background-color: #191F2C;
    color: #fff;
    border: none;
    border-radius: 6px;

    &:focus {
        outline: solid 2px #1c2331;
    }
}
</style>