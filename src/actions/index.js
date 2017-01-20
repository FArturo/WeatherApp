import axios from 'axios';

const API_KEY = `16bf78719d21681844f4cbd4ed717896`;
const rootURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${rootURL}&q=${city},us`;
  const request = axios.get(url);

  console.log('Request is', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
