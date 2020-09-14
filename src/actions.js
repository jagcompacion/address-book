import axios from "axios";
export const LOAD_CONTACTS = "LOAD_CONTACTS";
export const ADD_CONTACT = "ADD_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

export const loadContacts = () => async (dispatch) => {
  const response = await axios.get("https://randomuser.me/api/");
  return dispatch({
    type: LOAD_CONTACTS,
    payload: response.data.results.map((item) => ({
      id: item.id.value,
      email: item.email,
      phone: item.phone,
    })),
  });
};

export const addContact = (inputs) => (dispatch) => {
  return dispatch({
    type: ADD_CONTACT,
    payload: inputs,
  });
};

export const deleteContact = (contactId) => (dispatch) => {
  return dispatch({
    type: DELETE_CONTACT,
    payload: { contactId },
  });
};
