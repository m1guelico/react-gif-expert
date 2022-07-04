import { useState } from "react"

export const AddCategory = ({ onNewCategory}) => {

        const [inputValue, setInputValue] = useState('');

        const onInputChange = ( { target } ) => {
            setInputValue( target.value );
        }

        const onSubmit = ( event ) => {
            event.preventDefault();
            if( inputValue.trim().length <= 1 ) return;

            //setCategories((categories) => [inputValue, ...categories ] );
            setInputValue('');
            onNewCategory( inputValue.trim() );
        }

    return(
        /*<form onSubmit={ (event) => onSubmit(event)}>*/
        //Se puede mejorar el codigo por que al enviar el mismo componente
        //se puede eliminar
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                /*onChange={ (event) => onInputChange(event) }*/
                //Puedo obviar enviar el event
                onChange={ onInputChange }
            />
        </form>
    )

}