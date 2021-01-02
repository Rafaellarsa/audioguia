import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Search from './pages/search/Search';
import Player from './pages/audio/App';


const Routes = () => (
    <BrowserRouter>
        <div id="outer-container">
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
      <main id="page-wrap">
        <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/audio/:key" component={ Player } />
        </Switch>
        </main>
    </div>
    </BrowserRouter>
);

export default Routes;