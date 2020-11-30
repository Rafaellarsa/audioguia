import React, { Component } from 'react';
import './App.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import 'react-h5-audio-player/lib/styles.less';
import logo from '../../assets/logo.png';
import audioTeste from '../../assets/audios/Limon y sal/04-Limón y sal.flac';
import Information from '../../filter-json';
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1></h1>
        <AudioPlayer src={audioTeste} onPlay={e => console.log("onPlay")}/>
        <Link
          className="App-link"
          to="/"
        >
          Voltar
        </Link>
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