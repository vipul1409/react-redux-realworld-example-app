import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Home from './components/Home/index';

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={Login} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
