import { createStore } from "redux";
import contactReducer from "../redux/reducers";

const store = createStore(contactReducer);

export default store;
