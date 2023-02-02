import './App.css'
import { WeatherContextProvider } from './contexts/WeatherContext'
import PanelContainer from './components/PanelContainer/PanelContainer'

function App() {
  return (
    <div className="App">
      <WeatherContextProvider value={[]}>
        <PanelContainer />
      </WeatherContextProvider>
    </div>
  )
}

export default App
