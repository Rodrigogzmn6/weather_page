import React, { useContext } from 'react'
import './WeatherPanel.css'
import MyLocationRoundedIcon from '@mui/icons-material/MyLocationRounded'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import PanelLoader from '../PanelLoader/PanelLoader'
import { WeatherContext } from '../../contexts/WeatherContext'

function WeatherPanel({ data, startSearchButton, currentLocation }) {
  const { unit } = useContext(WeatherContext)
  return Object.keys(data).length !== 0 ? (
    <div id="weather-panel">
      <div className="weather-panel-buttons">
        <button onClick={startSearchButton}>Search for places</button>
        <button onClick={currentLocation}>
          <MyLocationRoundedIcon />
        </button>
      </div>
      <div className="weather-panel-info">
        <div className="weather-panel-image">
          <img
            src={`http://openweathermap.org/img/wn/${data.iconCode}@2x.png`}
            alt="weather graph"
          />
        </div>
        <div className="weather-panel-temperature">
          <h1>
            {data.temperature}
            {unit === 'metric' ? '℃' : '℉'}
          </h1>
          <h2>{data.description}</h2>
        </div>
        <div className="weather-panel-date">
          <p>
            Today - {data.day}. {data.date} {data.month}
          </p>
        </div>
        <div className="weather-panel-location">
          <LocationOnRoundedIcon />
          <p>{data.name}</p>
        </div>
      </div>
    </div>
  ) : (
    <PanelLoader />
  )
}
export default WeatherPanel
