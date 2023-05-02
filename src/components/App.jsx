
import { Component } from "react";
import { Form } from "./Form/Form";
import { Filtr } from "./Filter/Filter";
import { ContactsList } from "./Contacts/ContactsList";

export class App extends Component {

  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: "",
  }

  addContact = (contact) => {
    this.setState(({contacts}) => ({contacts:[...contacts, contact]}))
  }

  addFilterName = (e) => {
    this.setState({filter:e.currentTarget.value})
  }

  isNameDudlicated = name => 
    this.state.contacts.some(el => el.name.toLowerCase() === name.toLowerCase())
  
  deleteContacts = (e) => {
    this.setState({contacts: this.state.contacts.filter(el => el.id !== e.target.id )})
  }


  filterContact = () => {
    return this.state.contacts.filter(contact => contact.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase()))
} 
  
  render() {
  return (
    <>
      <h1>Phonebook</h1>
      <Form addContact={this.addContact} isNameDudlicated={this.isNameDudlicated} />
      <h2>Contacs</h2>
      <Filtr addFilterName={this.addFilterName} />
      <ContactsList contacts={this.filterContact()} deleteContacts={this.deleteContacts}/>
    </>
  )
  }
};
