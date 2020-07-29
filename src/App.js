import React from 'react';
import './App.css';
import AudioPlayer from 'react-h5-audio-player';
import logo from './assets/logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AudioPlayer
    src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
        <a
          className="App-link"
          href="https://mauc.ufc.br/pt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site do Mauc
        </a>
      </header>
    </div>
  );
}

export default App;