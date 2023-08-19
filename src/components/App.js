import React from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Contact List React-Redux</h1>
        <AddContact />
        <ContactList />
      </div>
    </Provider>
  );
};

export default App;
