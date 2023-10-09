import React, { Component } from 'react'

import ContactForm from './ContactForm/ContactForm';
import { FormContainer } from './formContainer/formDiv.styled';
import { Filter } from './Filter/Filter';
import { ContactList } from './List/ContactList';

export class App extends Component{
  state = {
    contacts: [],
    filter: "",
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

 getContact = contactsData => {
    console.log('contactsData:', contactsData);
    this.setState(() => {
      return {
        name: [contactsData, ...this.state.name],
      }
    });
  };

  handleDelete = e => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts].filter(
          contact => contact.id !== e.target.id
        ),
      }
    });
  };

  onSubmit = (newContact) => {

    const isExist = this.state.contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      );
    if (isExist) {
      alert(`${newContact.name} is already in contacts.`);
      return
    };
    this.setState(prev => ({ contacts: [...prev.contacts, newContact] }))
  };

  getFoundContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidMount() {
    try {
      const recievedContacts = JSON.parse(localStorage.getItem('contacts'));
      if (recievedContacts !== null) {
        this.setState({ contacts: recievedContacts });
      }
    } catch (error) {
      console.log(error);
    }
  }
  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      const { contacts } = this.state;
      try {
        const itemToSet = JSON.stringify(contacts);
        localStorage.setItem('contacts', itemToSet);
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const { filter } = this.setState 
    const { getContact, onSubmit, handleFilterChange, handleDelete } = this;
    const visibleContacts = this.getFoundContacts();
    return (
      <FormContainer getContact={getContact} >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={onSubmit} />

        <h2>Contacts</h2>
        <Filter handleFilterChange={handleFilterChange}
          filter={filter} />
        <ContactList
          contacts={visibleContacts}
        handleDelete={handleDelete}
        />
      </FormContainer>
    );
  }
};