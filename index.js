import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import SignIn from './app/screens/SignIn';
import Home from './app/screens/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={SignIn} />
    <Route path="/home" component={Home} />
  </Router>,
  document.getElementById('container')
);
