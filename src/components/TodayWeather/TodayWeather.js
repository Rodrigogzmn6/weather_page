import React from 'react'
import './TodayWeather.css'
import PanelLoader from '../PanelLoader/PanelLoader'
import TodayCard from '../TodayCard/TodayCard'

function TodayWeather({ data }) {
  console.log(data)
  return Object.keys(data).length !== 0 ? (
    <div id="today-weather">
      <TodayCard title={'Wind status'} data={data.wind.speed} unit={'mph'} />
      <TodayCard title={'Humidity'} data={data.main.humidity} unit={'%'}>
        <div className="progress-bar">
          <div
            className="completed-bar"
            style={{ width: `${data.main.humidity}%` }}
          ></div>
        </div>
      </TodayCard>

      <TodayCard title={'Visibility'} data={data.visibility} unit={'miles'} />

      <TodayCard title={'Air Pressure'} data={data.main.pressure} unit={'mb'} />
    </div>
  ) : (
    <PanelLoader />
  )
}
export default TodayWeather
