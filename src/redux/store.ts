import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { IState } from '../types/IState';

const middlewares = [thunk];

// tslint:disable-next-line:no-string-literal
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const store = createStore<IState>(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
