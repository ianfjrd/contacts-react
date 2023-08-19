import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from "../redux/actions";

const initialState = {
  contacts: [],
};

const contactReducer = (state = initialState, action) => {
  if (action.type === ADD_CONTACT) {
    return {
      ...state,
      contacts: [...state.contacts, action.payload],
    };
  } else if (action.type === EDIT_CONTACT) {
    return {
      ...state,
      contacts: state.contacts.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      ),
    };
  } else if (action.type === DELETE_CONTACT) {
    return {
      ...state,
      contacts: state.contacts.filter(
        (contact) => contact.id !== action.payload
      ),
    };
  } else {
    return state;
  }
};

export default contactReducer;
