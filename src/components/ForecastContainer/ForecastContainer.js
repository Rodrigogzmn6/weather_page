import React, { useContext, useEffect, useState } from 'react'
import './ForecastContainer.css'
import { WeatherContext } from '../../contexts/WeatherContext'
import ForecastDay from '../ForecastDay/ForecastDay'
import TodayWeather from '../TodayWeather/TodayWeather'

function ForecastContainer() {
  const {
    weatherData,
    forecastWeatherData,
    formatForecastWeatherData,
    getWeatherDataByName,
  } = useContext(WeatherContext)
  const [activeUnit, setActiveUnit] = useState('C')

  useEffect(() => {}, [forecastWeatherData])

  function handleCUnitClick() {
    setActiveUnit('C')
    getWeatherDataByName(forecastWeatherData.city.name, 'metric')
  }

  function handleFUnitClick() {
    setActiveUnit('F')
    getWeatherDataByName(forecastWeatherData.city.name, 'imperial')
  }

  return (
    <div id="forecast-container">
      <div className="forecast-container-buttons">
        <button
          className={activeUnit === 'C' ? 'active' : 'inactive'}
          onClick={handleCUnitClick}
        >
          ℃
        </button>
        <button
          className={activeUnit === 'F' ? 'active' : 'inactive'}
          onClick={handleFUnitClick}
        >
          ℉
        </button>
      </div>
      <div className="forecast-container-days">
        {Object.keys(forecastWeatherData).length > 0 &&
          forecastWeatherData.list.map((day, index) => {
            return (
              day.dt_txt.substring(11, 13) === '00' && (
                <ForecastDay key={index} day={formatForecastWeatherData(day)} />
              )
            )
          })}
      </div>
      <h2>Today's Hightlights</h2>
      <TodayWeather data={weatherData} />
    </div>
  )
}
export default ForecastContainer
