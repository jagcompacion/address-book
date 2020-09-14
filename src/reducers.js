import { combineReducers } from "redux";
import { LOAD_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from "./actions";

const contacts = (state = [], action) => {
  switch (action.type) {
    case LOAD_CONTACTS:
      return action.payload;
    case ADD_CONTACT:
      return [...state, action.payload];
    case DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload.contactId);
    default:
      return state;
  }
};

export default combineReducers({ contacts });
