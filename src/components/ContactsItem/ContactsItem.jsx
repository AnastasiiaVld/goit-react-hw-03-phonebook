import PropTypes from 'prop-types'
import s from './ContactsItem.module.css'

export const ContactsItem = ({ id, name, number, deleteContacts }) => {
    return (
        <li className={s.item}>
            {name}: {number}
            <button className={s.btn} id={id} onClick={deleteContacts}>Delete</button>
        </li>
    )
}

ContactsItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,  
    number: PropTypes.string,
    deleteContacts:PropTypes.func.isRequired
}