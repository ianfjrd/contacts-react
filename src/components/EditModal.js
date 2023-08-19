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
    if (!firstName || !lastName || !mobileNumber || !email) {
      setError("All fields are required");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!isValidPhoneNumber(mobileNumber)) {
      setError("Please enter 11 digits valid mobile number");
      return;
    }

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

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\d{11}$/;
    return phoneNumberRegex.test(phoneNumber);
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>Edit Contact</h2>
        <div className="error">{error}</div>
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
