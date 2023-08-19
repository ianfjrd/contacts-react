import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/actions";

function AddContact() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
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

    const newContact = {
      id: new Date().getTime(),
      firstName,
      middleName,
      lastName,
      mobileNumber,
      email,
    };
    dispatch(addContact(newContact));
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setMobileNumber("");
    setEmail("");
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
    <div>
      <h2>Add Contact</h2>
      <div className="error">{error}</div>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Middle Name"
        value={middleName}
        onChange={(e) => setMiddleName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br></br>
      <input
        type="tel"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      <button onClick={handleSubmit}>Add Contact</button>
    </div>
  );
}

export default AddContact;
