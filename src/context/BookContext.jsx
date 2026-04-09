import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';


  export const BookContext = createContext();


const BookProvider = ({children}) => {

        const [storedBook , setStoredBook] = useState([]);

        const handleMarkAsRead = (currentBook)=>{

            

            // 1 : store book id or store book object
            // 2 : where to store 
            // 3 : array or collection
            // 4 : if the book already exist then show alert 
            // 5 : if not then add the book in array of collection

            const isExistBook = storedBook.find(book => book.bookId === currentBook.bookId)
            if(isExistBook){
                toast.error('the book already exist')
                
            }
            else{
            setStoredBook([...storedBook, currentBook])
                toast.success(`${currentBook.bookName} is added`)
            }
        }

        const data = {
            storedBook,
            setStoredBook,
            handleMarkAsRead,
        }
    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;