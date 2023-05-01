import { Component } from "react"
import { nanoid } from 'nanoid'
import s from './Form.module.css'

export class Form extends Component {
    state = {
        number: "",
        name: "",
    }

    onInputChangeName = e => {
        this.setState({name:e.currentTarget.value})
    }

      onInputChangeNumber = e => {
        this.setState({number:e.currentTarget.value})
    }

    onFormSubmit = e => {
        e.preventDefault();

        const contact = { id: nanoid(), name: this.state.name, number: this.state.number };
        this.props.isNameDudlicated(this.state.name)
            ? alert(`${this.state.name}is already in contacts`)
            : this.props.addContact(contact)
        this.setState({
            name: '',
            number:''
        })

    }

    render() {
       return (
           <div>
               <form onSubmit={this.onFormSubmit}>
                <p className={s.p}>Name</p>
                <input className={s.input}
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onInputChangeName}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
                />
                <p className={s.p}>Number</p>
                <input className={s.input}
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.onInputChangeNumber}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                   />
                <button className={s.button} type="submit">
                Add contact
                </button>
               </form>
            </div>  
       )
    }
}