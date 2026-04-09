import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { addReadListToLocalDB, getAllReadListFromLocalDB, addWishListToLocalDB, getAllWishListFromLocalDB } from '../routes/localDB';


  export const BookContext = createContext();


const BookProvider = ({children}) => {

    
    const [storedBook , setStoredBook] = useState(() => getAllReadListFromLocalDB());
    const [wishList , setWishList] = useState(() => getAllWishListFromLocalDB());
        const handleMarkAsRead = (currentBook)=>{

            const isExistInWishList = wishList.find((book)=> book.bookId === currentBook.bookId)
            
        if(isExistInWishList){
            toast.error('this book is already exist in wishlist')
            return
        }


            const isExistBook = storedBook.find(book => book.bookId === currentBook.bookId)
            if(isExistBook){
                toast.error('the book already exist in read list')

                
            }
            else{
                addReadListToLocalDB(currentBook);
                setStoredBook([...storedBook, currentBook])
                toast.success(`${currentBook.bookName} is added to read list`)
            }
            
        }

        const handleWishList = (currentBook)=>{
        const isExistInReadList = storedBook.find((book)=> book.bookId === currentBook.bookId)
            
        if(isExistInReadList){
            toast.error('this book is already exist in read list')
            return
        }

            const isExistBook = wishList.find(book => book.bookId === currentBook.bookId)
            if(isExistBook){
                toast.error('the book already exist in wishlist')
                
            }
            else{
                addWishListToLocalDB(currentBook);
                setWishList([...wishList, currentBook])
                toast.success(`${currentBook.bookName} is added to wishlist`)
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