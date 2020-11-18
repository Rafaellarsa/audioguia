import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './components/Menu/Menu';
import * as serviceWorker from './serviceWorker';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <div id="outer-container">
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
      <main id="page-wrap">
        <Routes />
      </main>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
