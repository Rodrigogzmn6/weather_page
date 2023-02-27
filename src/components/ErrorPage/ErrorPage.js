import React from "react";
import './ErrorPage.css'
import Image from '../../assets/img/Scarecrow.png';

function ErrorPage({handleReload}) {
  return(
    <div className="error-page">
        <div className="scarecrow-image">
            <img src={Image} alt="Scarecrow" className="animate__animated animate__backInUp" />
        </div>
    
        <div className="message">
            <h2>I have bad news for you</h2>
            <p>The page you are looking for might be removed or is temporarily unavailable</p>
            <button onClick={handleReload}>BACK TO HOMEPAGE</button>
        </div>
    </div>
  )
}

export default ErrorPage;