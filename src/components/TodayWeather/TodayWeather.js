import React, { useContext } from 'react'
import './TodayWeather.css'
import PanelLoader from '../PanelLoader/PanelLoader'
import TodayCard from '../TodayCard/TodayCard'
import { WeatherContext } from '../../contexts/WeatherContext'

function TodayWeather({ data }) {
  const { unit } = useContext(WeatherContext)
  return Object.keys(data).length !== 0 ? (
    <div id="today-weather">
      <TodayCard
        title={'Wind status'}
        data={data.wind.speed}
        unit={unit === 'metric' ? 'Kmh' : 'mph'}
      />
      <TodayCard title={'Humidity'} data={data.main.humidity} unit={'%'}>
        <div className="progress-bar">
          <div
            className="completed-bar"
            style={{ width: `${data.main.humidity}%` }}
          ></div>
        </div>
      </TodayCard>

      <TodayCard
        title={'Visibility'}
        data={data.visibility}
        unit={unit === 'metric' ? 'Km' : 'miles'}
      />

      <TodayCard title={'Air Pressure'} data={data.main.pressure} unit={'mb'} />
    </div>
  ) : (
    <PanelLoader />
  )
}
export default TodayWeather
