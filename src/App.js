import './App.css'
import { WeatherContextProvider } from './contexts/WeatherContext'
import PanelContainer from './components/PanelContainer/PanelContainer'
import ForecastContainer from './components/ForecastContainer/ForecastContainer'

function App() {
  return (
    <div className="App">
      <WeatherContextProvider value={[]}>
        <PanelContainer />
        <ForecastContainer />
      </WeatherContextProvider>
    </div>
  )
}

export default App
