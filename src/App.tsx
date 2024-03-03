import React, { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import AppPlayerBar from './views/player/app-player-bar'
import AppFooter from './components/app-footer'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongAction } from '@/views/player/store/player'
function App() {
  // 获取某一首喜欢的歌曲
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCurrentSongAction(2124385868))
  }, [])
  return (
    <Suspense fallback="">
      <AppHeader></AppHeader>
      <div className="main">{useRoutes(routes)}</div>
      <AppFooter></AppFooter>
      <AppPlayerBar />
    </Suspense>
  )
}

export default App
