import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from './services/routes'

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
