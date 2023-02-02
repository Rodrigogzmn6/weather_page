import React, { useState } from 'react'
import './SearchContainer.css'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

function SearchContainer({ close, search }) {
  const [location, setLocation] = useState('')

  function handleChange(event) {
    setLocation(event.target.value)
  }

  function handleClick() {
    search(location)
    close(false)
  }

  return (
    <div id="search-container">
      <div className="search-container-close">
        <button onClick={() => close(false)}>
          <CloseRoundedIcon />
        </button>
      </div>
      <div className="search-container-form">
        <input
          className="search-container-textfield"
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
export default SearchContainer
