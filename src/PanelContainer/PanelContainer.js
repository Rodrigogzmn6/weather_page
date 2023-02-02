import React, { useEffect, useState } from 'react'
import './PanelContainer.css'
import MyLocationRoundedIcon from '@mui/icons-material/MyLocationRounded'
import PanelWeather from '../PanelWeather/PanelWeather'
import SearchContainer from '../SearchContainer/SearchContainer'

function PanelContainer() {
  const apiKey = process.env.REACT_APP_API_KEY
  const [weatherData, setWeatherData] = useState({})
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    getWeatherData()
  }, [])

  function getWeatherData() {
    navigator.geolocation.getCurrentPosition((position) => {
      let location = position.coords
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}&units=metric`,
      )
        .then((response) => response.json())
        .then((data) => setWeatherData(data))
    })
  }

  function getWeatherDataByName(location) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`,
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
  }

  return searching ? (
    <div className="panel-container-search-container">
      <SearchContainer close={setSearching} search={getWeatherDataByName} />
    </div>
  ) : (
    <div id="panel-container">
      <div className="panel-container-buttons">
        <button
          onClick={() => {
            setSearching(!searching)
          }}
        >
          Search for places
        </button>
        <button
          onClick={() => {
            getWeatherData()
          }}
        >
          <MyLocationRoundedIcon />
        </button>
      </div>
      {Object.keys(weatherData).length > 0 && weatherData['cod'] !== 200 ? (
        <div className="panel-container-error">
          <p>Error: {weatherData['message']}</p>
        </div>
      ) : (
        <div className="panel-container-panel-weather">
          <PanelWeather data={weatherData} />
        </div>
      )}
    </div>
  )
}
export default PanelContainer
