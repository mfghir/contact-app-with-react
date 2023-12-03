import ContactItem from "./ContactItem";

// eslint-disable-next-line react/prop-types
const ContactsList = ({ contacts }) => {
  return (
    <div>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} data={contact} />
          ))}
        </ul>
      ) : (
        <p>No contact yet</p>
      )}
    </div>
  );
};

export default ContactsList;
