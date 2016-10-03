import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// middleware
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';

// import the root reducer
import rootReducer from './reducers/index';

// use middleware
const middleware = applyMiddleware( /*logger(),*/ reduxThunk);

// creating store
const store = createStore(rootReducer, middleware);

// syncing history with redux
export const history = syncHistoryWithStore(browserHistory, store);

export default store;