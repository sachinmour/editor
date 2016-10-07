import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute } from 'react-router';

// components
import App from './components/app';

// redux store
import store, { history } from './store';

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path='/' component={ App }>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#root'));
