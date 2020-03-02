import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AsyncComponent from './Components/AsyncComponent.js';

const Home = () => import(/* webpackChunkName: "home" */ './Components/Home.js');
const Login = () => import(/* webpackChunkName: "login" */ './Components/Login.js');

ReactDOM.render((<Router>
    <div>
        <Route exact path="/" component={(props) => <AsyncComponent history={props.history} match={props} moduleProvider={Login} />
        }  />
        <Route path="/home" component={(props) => <AsyncComponent history={props.history} match={props.match} moduleProvider={Home} />} />
    </div>
</Router>), document.getElementById('app'));



