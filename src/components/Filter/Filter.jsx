import PropTypes from 'prop-types'
import s from './Filtr.module.css'

export const Filtr = ({ addFilterName }) => {
    return (
        <label className={s.label}> Find contacts by name:   
            <input className={s.input} type="text" onChange={addFilterName}/>
        </label>
    )
}

Filtr.propTypes = {
    addFilterName:PropTypes.func.isRequired
}