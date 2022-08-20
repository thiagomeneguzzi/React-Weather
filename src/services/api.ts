import axios from 'axios'

const key = process.env.REACT_APP_API_KEY

export function getWeather(city: string) {
  return axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no&lang=pt`)
}