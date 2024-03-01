import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppPlayerBar from './views/player/app-player-bar'

function App() {
  return (
    <Suspense fallback="">
      <AppHeader></AppHeader>
      <div className="main">{useRoutes(routes)}</div>
      <AppPlayerBar />
    </Suspense>
  )
}

export default App
