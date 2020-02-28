//components are rendered here.

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Login from './Components/Login.js';
import Home from './Components/Home.js';

ReactDOM.render((
        <BrowserRouter>
            <React.Fragment>
                <Route exact path="/" component={Login} />
                <Route exact path="/home" component={Home} />
            </React.Fragment>
        </BrowserRouter>
), document.getElementById('app'));