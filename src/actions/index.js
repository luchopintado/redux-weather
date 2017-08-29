// Section 5 - class 56
import axios from 'axios';

const API_KEY = '3971a4d08052eb3580d0e0166d3a9982';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// q=Lima&

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city) {
    const url = `${ROOT_URL}&q=${city},pe`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
