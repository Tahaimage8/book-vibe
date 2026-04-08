import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Cart = ({book}) => {
    // console.log(book)
    return (
        
           <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-200 w-96 shadow-sm">
  <figure className='p-6 rounded-xl'>
    <img
      src={book.image}
      alt={book.bookName} 
      className='rounded-xl h-55'
      />
  </figure>
  <div className="card-body">
     <div className='flex  items-center gap-2'>
         {book.tags.map((tags, ind)=>(
        <div key={ind} className="badge badge-outline badge-success ">{tags}</div>
      ))}
     </div>
    <h2 className="card-title font-bold text-2xl">
      {book.bookName}
    </h2>
    <p className='font-semibold text-lg'>{book.author}</p>

    <div className="card-actions justify-between border-t border-dashed border-gray-300 p-4">
      <div className="font-semibold">{book.category}</div>
      <div className="font-semibold flex gap-2 items-center text-xl">{book.rating} <FaRegStar /></div>
    </div>
  </div>
</Link> 

    );
};

export default Cart;