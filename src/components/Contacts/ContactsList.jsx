import { ContactsItem } from "../ContactsItem/ContactsItem"
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import s from './ContactsList.module.css'


export const ContactsList = ({ contacts, deleteContacts }) => {
  return (
    <ul className={s.ul}>
        {contacts.map(({ id, name, number }) => 
          <ContactsItem
            key={nanoid()}
            id={id}
            name={name}
            number={number}
            deleteContacts={deleteContacts}
          />
        )}
      </ul>
    )
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,  
            number: PropTypes.string,
        })
    ).isRequired,
    deleteContacts:PropTypes.func.isRequired
}