import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editContact } from "../redux/actions";

const EditModal = ({ isOpen, onClose, contact }) => {
  const [editedFirstName, setEditedFirstName] = useState(contact.firstName);
  const [editedMiddleName, setEditedMiddleName] = useState(contact.middleName);
  const [editedLastName, setEditedLastName] = useState(contact.lastName);
  const [editedMobileNumber, setEditedMobileNumber] = useState(
    contact.mobileNumber
  );
  const [editedEmail, setEditedEmail] = useState(contact.email);

  const dispatch = useDispatch();

  const handleSave = () => {
    const editedContact = {
      ...contact,
      firstName: editedFirstName,
      middleName: editedMiddleName,
      lastName: editedLastName,
      mobileNumber: editedMobileNumber,
      email: editedEmail,
    };
    dispatch(editContact(editedContact));
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>Edit Contact</h2>
        <input
          type="text"
          value={editedFirstName}
          onChange={(e) => setEditedFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="text"
          value={editedMiddleName}
          onChange={(e) => setEditedMiddleName(e.target.value)}
          placeholder="Middle Name"
        />
        <input
          type="text"
          value={editedLastName}
          onChange={(e) => setEditedLastName(e.target.value)}
          placeholder="Last Name"
        />
        <br></br>
        <input
          type="text"
          value={editedMobileNumber}
          onChange={(e) => setEditedMobileNumber(e.target.value)}
          placeholder="Mobile Number"
        />
        <input
          type="text"
          value={editedEmail}
          onChange={(e) => setEditedEmail(e.target.value)}
          placeholder="Email Address"
        />
        <br></br>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditModal;
