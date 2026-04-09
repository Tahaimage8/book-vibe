import React, { useContext, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContext';



// const booksPromise = fetch('/booksData.json').then((res)=> res.json())


const BookDetails = () => {
    const { id } = useParams();
    // console.log('id',id)
    //  const books = use(booksPromise);
    const books = useLoaderData();
        // console.log(books)

    const expectedBook = books.find((book)=> book.bookId == (id))

    const {bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing,
        
        } = expectedBook
        const {handleMarkAsRead,handleWishList} = useContext(BookContext)
        // console.log(handleMarkAsRead, 'dude')
    return ( 
<div className="grid grid-cols-2 card  bg-base-100 shadow-sm container mx-auto">
  <figure className=' flex items-center bg-gray-700 justify-center'>
    <img
      src={image}
      alt={bookName}
      className='h-100 object-cover'
      />
  </figure>
  <div className="card-body space-y-3 ">
    <h2 className="card-title text-2xl">{bookName}</h2>
    <h2 className="card-title">by :{author}</h2>
    <p className='py-2 border-y'>{category}</p>
    <p>{review}</p>
    <div className='flex  items-center gap-2 '>
         {tags.map((tags, ind)=>(
        <div key={ind} className="badge badge-outline badge-success ">{tags}</div>
      ))}
  </div>
    <div className=" justify-end border-t space-y-3">
        <div className='flex justify-between items-center gap-2'>
            <span>Number Of Pages : </span><span>{totalPages}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
            <span>Publisher: </span><span>{publisher}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
            <span>Year of Publishing : </span><span>{yearOfPublishing}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
            <span>rating: </span><span>{rating}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
            <span>Number Of Pages : </span><span>{totalPages}</span>
        </div>
        <div className='items-center flex gap-2'>
        <button className="btn" onClick={() => handleMarkAsRead(expectedBook)}>Mark as Read</button>
      <button className="btn btn-primary" onClick={() => handleWishList(expectedBook)}>WishList</button>
        </div>
    </div>
</div>
</div>
    );
};

export default BookDetails;