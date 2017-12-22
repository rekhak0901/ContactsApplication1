import { combineReducers } from 'redux';
import { createStore } from 'redux';

import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM, FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE } from './actions';

// let store = createStore(contacts, ['Use Redux']);


function isFetching(state = true, { type }) {
  switch (type) {
    case 'FETCH_REQUEST':
      return true;
    case 'FETCH_SUCCESS':
    case 'FETCH_FAILURE':
      return false;
    default:
      return state;
  }
}

function contacts(state = [], { type, contacts, error }) {
  switch (type) {
    case 'FETCH_SUCCESS':
      return contacts;
    default:
      return state;
  }
}

const contactApp = combineReducers({
  contacts,
  isFetching
});

export default contactApp;
