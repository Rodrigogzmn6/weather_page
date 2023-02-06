import React from 'react'
import './ForecastDay.css'
import PanelLoader from '../PanelLoader/PanelLoader'

function ForecastDay({ day }) {
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
        <p>{day.feels_like}℃</p>
        <p>{day.min_temp}℃</p>
      </div>
    </div>
  ) : (
    <PanelLoader />
  )
}
export default ForecastDay
