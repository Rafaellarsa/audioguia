import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Search from './pages/search/Search';
import Player from './pages/home/App';
import Player2 from './pages/home copy/App';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Search} />
            <Route path="/audio/02" component={Player} />
            <Route path="/audio/04" component={Player2} />
        </Switch>
    </BrowserRouter>
);

export default Routes;