import React, { useContext, useEffect, useState } from 'react'
import './PanelContainer.css'
import WeatherPanel from '../WeatherPanel/WeatherPanel'
import SearchPanel from '../SearchPanel/SearchPanel'
import { WeatherContext } from '../../contexts/WeatherContext'

function PanelContainer() {
  const {
    weatherData,
    getWeatherDataByLocation,
    getWeatherDataByName,
    formatWeatherData,
  } = useContext(WeatherContext)
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    getWeatherDataByLocation()
  }, [])

  function handleStartSearchButton() {
    setSearching(true)
  }

  function handleCurrentLocation() {
    getWeatherDataByLocation()
  }

  return (
    <div id="panel-container">
      {searching ? (
        <SearchPanel close={setSearching} search={getWeatherDataByName} />
      ) : (
        <WeatherPanel
          data={formatWeatherData(weatherData)}
          startSearchButton={handleStartSearchButton}
          currentLocation={handleCurrentLocation}
        />
      )}
    </div>
  )
}
export default PanelContainer
