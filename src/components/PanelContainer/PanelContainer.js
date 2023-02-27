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

    if(Object.keys(weatherData).length > 0){
      console.log(weatherData)
      if(weatherData['cod'] !== 200) {
        alert(weatherData['message'] + '. Please go to the home the page')
        return (<div></div>);
      } else {
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
    } else {<div></div>}
}
export default PanelContainer
