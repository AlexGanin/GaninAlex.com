import React from "react"
import Routes from "routes"
import NavTop from "components/navTop"
import { BrowserRouter } from "react-router-dom"
//import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { AlertState } from "context/alert/AlertState"
import { GithubState } from "context/github/GithubState"

function App() {
    return (
      <>
        <GithubState>
          <AlertState>
            <BrowserRouter>
              <NavTop />
              <Routes>
              </Routes>
            </BrowserRouter>
          </AlertState>
        </GithubState>
      </>
    )
  
}

export default App
