import { useContext, useState } from 'react'
import { Sidbar } from './components/Sidbar'
import { Player } from './components/Player'
import { Display } from './components/Display'
import { PlayerContext } from './context/PlayerContext'


function App() {

  const {audioRef,track} = useContext(PlayerContext)

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidbar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App
