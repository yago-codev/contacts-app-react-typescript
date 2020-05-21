import React, { useState } from 'react';
import styled from 'styled-components';

import Contact from '../models/Contact'
import CONTACTS from '../contacts';
import ContactItem from '../components/ContactItem';
import AddContactForm from '../components/AddContactForm';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
`;

const Card = styled.div`
  width: 768px;
  padding: 16px;
  background-color: #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  overflow-y: auto;
`;

const ContactList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Contacts = () => {
  const [contacts, setContacts] = useState(CONTACTS);
  const [isAddingContact, setIsAddingContact] = useState(false);

  const handleRemoveContact = (removeContactId: string) => {
    setContacts(contacts.filter(contact => contact.id !== removeContactId));
  }

  const handleAddContact = (contact: Contact) => {
    setContacts(contacts => contacts.concat(contact));
    setIsAddingContact(false);
  }

  return (
    <Wrapper>
      <Card>
        <header>
          {isAddingContact && (
            <AddContactForm onAddContact={handleAddContact} />
          )}
          {!isAddingContact && (
            <button onClick={() => setIsAddingContact(true)}>Adicionar Contato</button>
          )}
        </header>
        <ContactList>
          {contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} onRemoveContact={handleRemoveContact} />
          ))}
        </ContactList>
      </Card>
    </Wrapper >
  )

}

export default Contacts;