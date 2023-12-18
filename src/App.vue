<script>
import axios from 'axios';
import apiConfig from './apiConfig';
import { store } from './store';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
export default {
  components: {
    AppHeader,
    AppMain,
  },
  methods: {
    searchMovieAndSeries() {
      axios.get(apiConfig.apiUrl + apiConfig.apiUrlPathMovie, {
        params: {
          api_key: apiConfig.apiKey,
          query: store.searchKey,
        }
      }).then((response) => {
        store.searchMovieResult = response.data.results
        console.log(store.searchMovieResult)
      })
    }
  }
}

</script>

<template>
  <AppHeader @search="searchMovieAndSeries" />
  <AppMain />
</template>

<style scoped></style>