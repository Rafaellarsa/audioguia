import React, { Component } from 'react';
import './App.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import 'react-h5-audio-player/lib/styles.less';
import logo from '../../assets/logo.png';
import Information from '../../filter-json';
import { Link, useLocation } from 'react-router-dom';

function App() {
  const { state } = useLocation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{ state.item.nome }</h1>
        <AudioPlayer
    src={ process.env.PUBLIC_URL + '/audios/' + `${state.item.key}` + '.mp3' }
    onPlay={e => console.log("onPlay")}
  />
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