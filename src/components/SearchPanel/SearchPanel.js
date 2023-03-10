import React, { useContext, useState } from 'react'
import './SearchPanel.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { WeatherContext } from '../../contexts/WeatherContext'

function SearchPanel({ close, search }) {
  const [location, setLocation] = useState('')
  const { unit } = useContext(WeatherContext)

  function handleChange(event) {
    setLocation(event.target.value)
  }

  function handleClick() {
    search(location, unit)
    close(false)
  }

  return (
    <div id="search-panel">
      <div className="search-panel-close">
        <button onClick={() => close(false)}>
          <CloseRoundedIcon />
        </button>
      </div>
      <div className="search-panel-form">
        <input
          className="search-panel-textfield"
          placeholder="Search location"
          onChange={handleChange}
          value={location}
        />
        <button
          onClick={() => {
            handleClick()
          }}
        >
          Search
        </button>
      </div>
    </div>
  )
}
export default SearchPanel
