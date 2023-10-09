import { Component } from 'react';
import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';

export class ContactList extends Component {
  render() {
    const { visibleContacts, contacts, handleDelete } = this.props;
    return (
      <List>
        {contacts.map(({ name, number, id }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            visibleContacts={visibleContacts}
            handleDelete={handleDelete}
          ></Contact>
        )
        })}
      </List>
    );
  };
};