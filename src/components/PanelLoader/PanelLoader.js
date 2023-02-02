import React from 'react'
import './PanelLoader.css'

function PanelLoader() {
  return (
    <div id="panel-loader">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
export default PanelLoader
