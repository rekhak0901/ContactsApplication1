/*
 * actions
 */

import axios from 'axios';

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const ADD_CONTACT_REQUEST = 'ADD_CONTACT_REQUEST';
export const ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS';
export const ADD_CONTACT_FAILURE = 'ADD_CONTACT_FAILURE';

export const DELETE_CONTACT_REQUEST = 'DELETE_CONTACT_REQUEST';
export const DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS';
export const DELETE_CONTACT_FAILURE = 'DELETE_CONTACT_FAILURE';

export const EDIT_CONTACT_REQUEST = 'EDIT_CONTACT_REQUEST';
export const EDIT_CONTACT_SUCCESS = 'EDIT_CONTACT_SUCCESS';
export const EDIT_CONTACT_FAILURE = 'EDIT_CONTACT_FAILURE';

/*
 * actions creators
 */
export function addItem(name, phone1, phoneType1, phone2, phoneType2, phone3, phoneType3, email, address,) {
  return {
    type: ADD_ITEM,
    name,
    phone1,
    phoneType1,
    phone2,
    phoneType2,
    phone3,
    phoneType3,
    email,
    address,
  };
}

export function deleteItem(index) {
  return {
    type: DELETE_ITEM,
    index
  };
}

export function editItem(index, name, phone1, phoneType1, phone2, phoneType2, phone3, phoneType3, email, address) {
  return {
    type: EDIT_ITEM,
    index,
    name,
    phone1,
    phoneType1,
    phone2,
    phoneType2,
    phone3,
    phoneType3,
    email,
    address
  };
}
//define action within an action creator

export const fetchRequest = () => ({ type: FETCH_REQUEST })
export const fetchSuccess = contacts => ({ type: FETCH_SUCCESS, contacts })
export const fetchFailure = error => ({ type: FETCH_FAILURE, error })

export const addContactRequest = () => ({ type: ADD_CONTACT_REQUEST })
export const addContactSuccess = contacts => ({ type: ADD_CONTACT_SUCCESS, contacts })
export const addContactFailure = error => ({ type: ADD_CONTACT_FAILURE, error })

export const deleteContactRequest = () => ({ type: DELETE_CONTACT_REQUEST })
export const deleteContactSuccess = contacts => ({ type: DELETE_CONTACT_SUCCESS, contacts })
export const deleteContactFailure = error => ({ type: DELETE_CONTACT_FAILURE, error })

export const editContactRequest = () => ({ type: EDIT_CONTACT_REQUEST })
export const editContactSuccess = contacts => ({ type: EDIT_CONTACT_SUCCESS, contacts })
export const editContactFailure = error => ({ type: EDIT_CONTACT_FAILURE, error })


export const fetchAllContacts = () => dispatch =>  {
    dispatch(fetchRequest())
      axios({
        method:'get',
        url:'http://localhost:8080/api/contacts',
      })
      .then(response => {
        dispatch(fetchSuccess(response.data))
      })
      .catch(error => {
        dispatch(fetchFailure(error))

  });
}


export const postContact = contact => dispatch =>  {
  dispatch(addContactRequest())
    axios({
      method:'post',
      url:'http://localhost:8080/api/contacts',
      data: contact
    })
    .then(response => {
      dispatch(addContactSuccess(response.data))
      dispatch(fetchAllContacts());
    })
    .catch(error => {
      dispatch(addContactFailure(error))
    });
}

export const deleteContact = id => dispatch =>  {
  dispatch(deleteContactRequest())
    axios({
      method:'delete',
      url:`http://localhost:8080/api/contacts/${id}`,
    })
    .then(response => {
      dispatch(deleteContactSuccess(response.data))
      dispatch(fetchAllContacts());
    })
    .catch(error => {
      dispatch(deleteContactFailure(error))
    });
}

export const putContact = contact => dispatch =>  {
  const { id } = contact;
  dispatch(editContactRequest())
    axios({
      method:'put',
      url:`http://localhost:8080/api/contacts/${id}`,
      data: contact
    })
    .then(response => {
      dispatch(editContactSuccess(response.data))
      dispatch(fetchAllContacts());
    })
    .catch(error => {
      dispatch(editContactFailure(error))
    });
}

