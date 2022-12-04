import AppSeguro from "./components/AppSeguro"
import {CotizadorProvider} from "./context/CotizadorProvider"

function App() {
 

  return (
    <div className="App">
      <CotizadorProvider>
      <AppSeguro />
      
      </CotizadorProvider>

    </div>
  )
}

export default App
