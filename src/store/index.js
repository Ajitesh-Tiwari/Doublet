import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const store = createStore(
  rootReducer /* preloadedState, */,
  +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

/*
getState for accessing the current state of the application
dispatch for dispatching an action
subscribe for listening on state changes
*/
