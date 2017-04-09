import axios from 'axios';

const API_KEY = '5f0de39c8839f3a9050bff355b7f3f28';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: 'FETCH_WEATHER',
    payload: request
  };
}
