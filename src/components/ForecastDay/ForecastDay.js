import React, { useContext } from 'react'
import './ForecastDay.css'
import PanelLoader from '../PanelLoader/PanelLoader'
import { WeatherContext } from '../../contexts/WeatherContext'

function ForecastDay({ day }) {
  const { unit } = useContext(WeatherContext)
  return Object.keys(day).length !== 0 ? (
    <div id="forecast-day">
      <h2>
        {day.day}. {day.date} {day.month}
      </h2>
      <img
        src={`http://openweathermap.org/img/wn/${day.iconCode}@2x.png`}
        alt="weather graph"
      />
      <div className="forecast-day-temperature">
        <p>
          {day.feels_like}
          {unit === 'metric' ? '℃' : '℉'}
        </p>
        <p>
          {day.min_temp}
          {unit === 'metric' ? '℃' : '℉'}
        </p>
      </div>
    </div>
  ) : (
    <PanelLoader />
  )
}
export default ForecastDay
