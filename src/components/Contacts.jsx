import { useState } from "react";
import ContactsList from "./ContactsList";
import inputs from "../constants/inputs";

import { v4 } from "uuid";

const Contacts = () => {
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
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
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("All fields must be filled out");
      return;
    }

    setAlert("");
    const newContact = { ...contacts, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);

    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <div>
      <div>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}

        <button onClick={addHandler}>Add Contact</button>
      </div>

      <div>{alert && <p>{alert}</p>}</div>

      <ContactsList
        contacts={contacts}
        setContact={setContact}
        deleteHandler={deleteHandler}
      />
    </div>
  );
};

export default Contacts;
