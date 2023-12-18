import { reactive } from "vue";
import apiConfig from "./apiConfig";
export const store = reactive({
    apiConfig,
    searchKey: '',
    searchMovieResult: [],
    searchSeriesResult: [],
})