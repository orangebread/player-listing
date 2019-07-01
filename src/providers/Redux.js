import React from 'react';
import rootReducer from '../reducers';
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

const middleware = [
  thunk
].filter(i => i);

const enhancer = compose(...[
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
].filter(i => i));

const store = createStore(rootReducer,
  enhancer
);

export default ({children}) => (
  <Provider store={store}>
    {React.Children.only(children)}
  </Provider>
);
