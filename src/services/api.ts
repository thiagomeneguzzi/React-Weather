import axios from 'axios'

const key = ''

export function getWeather(city: string) {
  return axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`)
}