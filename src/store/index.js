import { createStore } from 'redux';
import rootReducer from '../reducers/index';

export default createStore(rootReducer);

/*
getState for accessing the current state of the application
dispatch for dispatching an action
subscribe for listening on state changes
*/
