import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './containers/Root';
import { configureStore } from './redux/configureStore';

import './styles/main.css';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './redux/reducers.js';

const initialState = {
  contacts: [{
    name: 'rekha',
    phone1: '13111111191',
    phoneType1: 'work',
    email: 'rekha@abc.com',
    address: '25 Ave at Port Imperial'
  }, {
    name: 'Will',
    phone1: '13111191112',
    phoneType1: 'mobile',
    email: 'will@gv.com',
    address: '57 chedword circle'
  }]
};

const store = configureStore(initialState);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
