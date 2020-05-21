import React from 'react';
import styled from 'styled-components';

import Contact from '../models/Contact';

type Props = {
  contact: Contact;
  onRemoveContact: (id: string) => void;
};

const Card = styled.li`
  padding: 16px;
  background-color: #CCC;
  border-radius: 20px;

  & + & {
    margin-top: 16px;
  }
`;

const ContactItem = ({ contact, onRemoveContact }: Props) => (
  <Card>
    <p>Nome: {contact.name}</p>
    <p>E-mail: {contact.email}</p>
    <p>Telefone: {contact.phoneNumber}</p>
    <button onClick={() => onRemoveContact(contact.id)}>
      Excluir Contatos
    </button>
  </Card>
);

export default ContactItem;