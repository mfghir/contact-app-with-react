/* eslint-disable react/prop-types */
import ContactItem from "./ContactItem";
import styles from "./ContactsList.module.css";

// eslint-disable-next-line react/prop-types
const ContactsList = ({ contacts, deleteHandler }) => {
  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul className={styles.contacts} >
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              data={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No contact yet</p>
      )}
    </div>
  );
};

export default ContactsList;
