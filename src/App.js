import React from "react"
import Routes from "routes"
import NavTop from "components/navTop"
import { BrowserRouter } from "react-router-dom"

function App() {
    return (
      <>
        <BrowserRouter>
          <NavTop />
          <Routes>
          </Routes>
        </BrowserRouter>
      </>
    )
  
}

export default App
