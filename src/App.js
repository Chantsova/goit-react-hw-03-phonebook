import './App.css';
import React, { Component } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter.jsx';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Anastasia', number: '161-69-55' },
      { id: 'id-2', name: 'Svetlana Divnaya', number: '443-89-12' },
      { id: 'id-3', name: 'Illya Chantsov', number: '645-17-79' },
      { id: 'id-4', name: 'Tatiana Zhelezina', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;

    const found = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase(),
    );
    found === undefined
      ? this.setState(prevState => {
          return { contacts: [...prevState.contacts, data] };
        })
      : alert(`${data.name} is already in the Contact List`);
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <div className="wrapper">
          <section className="phonebook">
            <h1 className="phonebook__title">Phonebook</h1>
            <ContactForm onSubmit={this.formSubmitHandler} />
          </section>
          <section className="contacts">
            <h2 className="contacts__title">Contacts</h2>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList
              contacts={visibleContacts}
              onDeleteContact={this.deleteContacts}
            />
          </section>
        </div>
      </>
    );
  }
}

export default App;
