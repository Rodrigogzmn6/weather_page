import React, { useState } from 'react'

const WeatherContext = React.createContext([])

function WeatherContextProvider({ children }) {
  const [weatherData, setWeatherData] = useState({})
  const [forecastWeatherData, setForecastWeatherData] = useState({})
  const [unit, setUnit] = useState('metric')
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
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

  function getWeatherDataByLocation() {
    setUnit('metric')
    navigator.geolocation.getCurrentPosition((position) => {
      let location = position.coords
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=d1006ab6bd1d9b78629d448b5858a92f&units=metric`,
      )
        .then((response) => response.json())
        .then((data) => setWeatherData(data))
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=d1006ab6bd1d9b78629d448b5858a92f&units=metric`,
      )
        .then((response) => response.json())
        .then((data) => setForecastWeatherData(data))
    })
  }

  function getWeatherDataByName(location, unit) {
    setUnit(unit)
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d1006ab6bd1d9b78629d448b5858a92f&units=${unit}`,
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=d1006ab6bd1d9b78629d448b5858a92f&units=${unit}`,
    )
      .then((response) => response.json())
      .then((data) => setForecastWeatherData(data))
  }

  function formatWeatherData(data) {
    if (Object.keys(data).length > 0 && data !== undefined) {
      let date = new Date()
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

  function formatForecastWeatherData(day) {
    if (Object.keys(day).length > 0 && day !== undefined) {
      let dayDate = new Date(day.dt_txt)
      let formattedDay = {
        day: days[dayDate.getDay()].substring(0, 3),
        date: dayDate.getDate(),
        month: month[dayDate.getMonth()].substring(0, 3),
        iconCode: day.weather[0].icon,
        feels_like: Math.round(day.main.feels_like),
        min_temp: Math.round(day.main.temp_min),
      }
      return formattedDay
    } else {
      return day
    }
  }

  return (
    <WeatherContext.Provider
      value={{
        unit,
        weatherData,
        forecastWeatherData,
        getWeatherDataByLocation,
        getWeatherDataByName,
        formatWeatherData,
        formatForecastWeatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export { WeatherContext, WeatherContextProvider }
