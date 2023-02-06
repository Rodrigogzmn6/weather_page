import React from 'react'
import './TodayCard.css'

function TodayCard({ title, data, unit, children }) {
  return (
    <div id="today-card">
      <h4>{title}</h4>
      <div className="today-card-data">
        <h2>{data}</h2>
        <h3>{unit}</h3>
      </div>
      {children}
    </div>
  )
}
export default TodayCard
