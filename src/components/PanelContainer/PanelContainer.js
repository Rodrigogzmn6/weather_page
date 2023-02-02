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
    hello,
  } = useContext(WeatherContext)
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    getWeatherDataByLocation()
  }, [])

  function formatWeatherData(data) {
    if (Object.keys(data).length > 0) {
      let date = new Date()
      const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ]
      const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
      let formattedData = {
        iconCode: data['weather'][0]['icon'],
        temperature: Math.round(data['main']['temp']),
        description: data['weather'][0]['description'],
        day: days[date.getDay()].substring(0, 3),
        date: date.getDate(),
        month: month[date.getMonth()].substring(0, 3),
        name: data['name'],
      }
      return formattedData
    } else {
      return data
    }
  }

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
