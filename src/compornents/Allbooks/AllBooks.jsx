import React, { use } from 'react';
import Cart from './Cart';

const booksPromise = fetch('/booksData.json').then((res)=> res.json())

const AllBooks = () => {
    const books = use(booksPromise);

    return (
        <div className='my-12'>
            <h2 className='font-bold text-3xl text-center'>Books</h2>

<div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container mx-auto'>
            {
            books.map((book)=> <Cart book={book} key={book.bookId}></Cart>
                
          )
            }
</div>
        </div>
    );
};

export default AllBooks;