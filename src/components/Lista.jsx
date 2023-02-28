import React from 'react'
import { useState } from 'react'

const lista = () => {
    const [items, setItems] = useState([]);

    function addItem() {
        const newItem = {
            id: items.length + 1,
            text: `El articulo  ${items.length + 1} se ha añadido a la lista`
        };
        setItems([...items, newItem]);
    
    }
    return (
        <div>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
            <button onClick={addItem}>Agregar tu estado</button>
        </div>
    )
}

export default lista