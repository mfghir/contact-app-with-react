// import React from 'react'

import { useState } from "react";
import ContactsList from "./ContactsList";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    setContacts((contacts) => [...contacts, contact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={contact.name}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={contact.lastName}
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={contact.email}
          onChange={changeHandler}
        />
        <input
          type="number"
          placeholder="Phone"
          name="phone"
          value={contact.phone}
          onChange={changeHandler}
        />
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <ContactsList contacts={contacts} />
    </div>
  );
};

export default Contacts;
