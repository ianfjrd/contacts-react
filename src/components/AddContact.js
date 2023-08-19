import React from "react";

function AddContact() {
  return (
    <div>
      <h2>Add Contact</h2>
      <input
        type="text"
        placeholder="First Name"
      />
      <input
        type="text"
        placeholder="Middle Name"
      />
      <input
        type="text"
        placeholder="Last Name"
      />
      <br></br>
      <input
        type="tel"
        placeholder="Mobile Number"
      />
      <input
        type="email"
        placeholder="Email Address"
      />
      <br></br>
      <button >Add Contact</button>
    </div>
  );
};

export default AddContact;
