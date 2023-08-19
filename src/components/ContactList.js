import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editContact, deleteContact } from "../redux/actions";
import EditModal from "./EditModal";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const [selectedContact, setSelectedContact] = useState(null);

  const handleEdit = (contact) => {
    setSelectedContact(contact);
  };

  const handleModalClose = () => {
    setSelectedContact(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.firstName} {contact.middleName} {contact.lastName}-{" "}
            {contact.mobileNumber} - {contact.email}
            <button onClick={() => handleEdit(contact)}>Edit</button>
            <button onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {selectedContact && (
        <EditModal
          isOpen={true}
          onClose={handleModalClose}
          contact={selectedContact}
        />
      )}
    </div>
  );
};

export default ContactList;
