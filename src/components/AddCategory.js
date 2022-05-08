import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({ setcategories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = ( e ) => {
        setinputValue( e.target.value );
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2) { 
        setcategories( Doggos => [ inputValue, ...Doggos  ] );
        setinputValue('');
    }
}

//El inputValue va a actualizarse conforme a lo que escribas en el cuadro
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
        
    )
}

//Aqui definimos que setcategories sea obligatorio
AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired 
}
