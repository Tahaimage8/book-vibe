import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

const Books = () => {
         const { storedBook ,} = useContext(BookContext)
            // console.log(  storedBook ,'listed')
    return (
        <div>
            listed books
        </div>
    );
};

export default Books;