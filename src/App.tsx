import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'

function App() {
  return (
    <Suspense fallback="">
      <AppHeader></AppHeader>
      <div className="main">{useRoutes(routes)}</div>
    </Suspense>
  )
}

export default App
