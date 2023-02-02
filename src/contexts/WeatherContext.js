import React, { useState } from 'react'

const WeatherContext = React.createContext([])

function WeatherContextProvider({ children }) {
  const apiKey = process.env.REACT_APP_API_KEY
  const [weatherData, setWeatherData] = useState({})

  function getWeatherDataByLocation() {
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
    console.log('setting by name')
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`,
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
  }

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        getWeatherDataByLocation,
        getWeatherDataByName,
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export { WeatherContext, WeatherContextProvider }
