import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';


  export const BookContext = createContext();


const BookProvider = ({children}) => {

    
    const [storedBook , setStoredBook] = useState([]);
    const [wishList , setWishList] = useState([]);
        const handleMarkAsRead = (currentBook)=>{

                    const isExistInWishList = wishList.find((book)=> book.bookId === currentBook.bookId)
            
        if(isExistInWishList){
            toast.error('this book is already exist in store book')
            return
        }


            const isExistBook = storedBook.find(book => book.bookId === currentBook.bookId)
            if(isExistBook){
                toast.error('the book already exist')

                
            }
            else{
            setStoredBook([...storedBook, currentBook])
                toast.success(`${currentBook.bookName} is added on storedBook`)
            }
            
        }


        const handleWishList = (currentBook)=>{
        const isExistInReadList = storedBook.find((book)=> book.bookId === currentBook.bookId)
            
        if(isExistInReadList){
            toast.error('this book is already exist in store book')
            return
        }

            const isExistBook = wishList.find(book => book.bookId === currentBook.bookId)
            if(isExistBook){
                toast.error('the book already exist ')
                
            }
            else{
            setWishList([...wishList, currentBook])
                toast.success(`${currentBook.bookName} is added on wishList`)
            }
        }

        const data = {
            storedBook,
            setStoredBook,
            handleMarkAsRead,
            handleWishList,
            wishList,
            setWishList
        }
    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;