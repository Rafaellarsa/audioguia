import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Search from './pages/search/Search';
import Player from './pages/audio/App';
import Player2 from './pages/audio 2/App';
import Player3 from './pages/audio 3/App';


const Routes = () => (
    <BrowserRouter>
        <div id="outer-container">
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
      <main id="page-wrap">
        <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/audio/02" component={Player} />
            <Route path="/audio/03" component={Player2} />
            <Route path="/audio/04" component={Player3} />
        </Switch>
        </main>
    </div>
    </BrowserRouter>
);

export default Routes;