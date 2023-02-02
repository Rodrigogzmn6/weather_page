import React from 'react'
import './PanelWeather.css'
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded'
import PanelLoader from '../PanelLoader/PanelLoader'

function PanelWeather({ data }) {
  const date = new Date()
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

  return Object.keys(data).length !== 0 ? (
    <div id="panel-weather">
      <div className="panel-weather-image">
        <img
          src={`http://openweathermap.org/img/wn/${data['weather'][0]['icon']}@2x.png`}
          alt="weather graph"
        />
      </div>
      <div className="panel-weather-info">
        <h1>{Math.round(data['main']['temp'])}℃</h1>
        <h2>{data['weather'][0]['description']}</h2>
      </div>
      <div className="panel-weather-date">
        <p>
          Today - {days[date.getDay()].substring(0, 3)}. {date.getDate()}{' '}
          {month[date.getMonth()].substring(0, 3)}
        </p>
      </div>
      <div className="panel-weather-location">
        <LocationOnRoundedIcon />
        <p>{data['name']}</p>
      </div>
    </div>
  ) : (
    <div>
      <PanelLoader />
    </div>
  )
}
export default PanelWeather
