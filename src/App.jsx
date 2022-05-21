import { useState } from 'react'
import logo from './logo.svg'
import Navbar from './components/Navigation/Navbar'
import VideoPlayer from './components/Video/VideoPlayer'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar>
      
        </Navbar>
        <VideoPlayer>
          
        </VideoPlayer>
      </header>
    </div>
  );
}

export default App
