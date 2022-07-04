import { useState } from "react";
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () =>{

    const [categories, setCategories] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {
        // Valorant
        // No podemos usar el push
        // categories.push('Valorant');
        
        // Primera forma de agregar
        //setCategories( [ ...categories, 'Valorant' ] );
        if(categories.includes(newCategory)) return;
        setCategories( [ newCategory, ...categories ] );
        
        // Segunda forma, desestructurando
        //setCategories( cat => [ ...cat, 'Valorant' ] );
    }

    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            
            {/* Input */}

            <AddCategory 
                //setCategories={setCategories} 
                onNewCategory={ (value) => onAddCategory(value) }
            />

            {/* Listado de Gif */}
            

            { 
                /*categories.map( category => {
                    return(
                        <div key={ category }>
                            <h3>{ category }</h3>
                            <li>{ category }</li>
                        </div>
                    ) 
                } )*/
                //Mejoramos el codigo eliminamos el return
                categories.map( category => (
                    <GifGrid 
                        key={ category } 
                        category={ category }
                    />
                ))
            }


            {/* Gif Item */}

        </>

    )
}