import axios from 'axios';

const API_KEY = '2396b60c838023240cd08615fec444c5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
//${API_KEY} this is ES6 syntax and it is totally optional

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);


  return {
    type: FETCH_WEATHER,
    payload: request
     //pauload is additional i.e describe additional data with action
  };
}
