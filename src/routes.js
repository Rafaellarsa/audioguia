import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Search from './pages/search/Search';
import Player from './pages/home/App';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/audio" component={Player} />
        </Switch>
    </BrowserRouter>
);

export default Routes;