import { useState, useRef } from 'react'
import './App.css'
import axios from 'axios'
import WeatherInformations from './components/weatherinformations/WeatherInformations'

function App() {
  const [weather, setWeather] = useState({})
  const inputRef = useRef()

  async function searchCity(){
    const city = inputRef.current.value
    const Key = "b50a69380e601af5b9b07de07ca10d09"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&lang=pt_br&units=metric`
    const apiInfo = await axios.get(url)
    setWeather(apiInfo)
  }

  return (
    <div>
      <h1>Teste</h1>
      <input ref={inputRef} type='text' placeholder='Digite a cidade que deseja buscar!'/>
      <button onClick={searchCity}>Buscar</button>

      <WeatherInformations weather={weather}/>
    </div>
  )
}

export default App
