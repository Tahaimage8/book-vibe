import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import Cart from '../Allbooks/Cart';

const Listed = () => {
             const { storedBook } = useContext(BookContext)
             if (storedBook.length === 0) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-2">
      <h2 className="text-xl md:text-2xl font-semibold text-base-content">
        No Listed Data
      </h2>
      <p className="text-base-content/60 text-sm">
        Nothing added yet.
      </p>
    </div>
  );
}
    return (
  <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center'>
    {
      storedBook.map((book, ind) => (
        <Cart key={ind} book={book}/>
      ))
    }
  </div>

    );
};

export default Listed;