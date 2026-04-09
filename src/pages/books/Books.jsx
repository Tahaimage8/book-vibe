import React from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Wish from '../../compornents/listed.wish.books/wish';
import Listed from '../../compornents/listed.wish.books/Listed';
// import 'react-tabs/style/react-tabs.css';
const Books = () => {

            // console.log(  storedBook ,'listed')
    return (
        <div className='container mx-auto '>
<Tabs>
  <TabList className="flex gap-2 border-b border-base-300">
    <Tab className="px-4 py-2 cursor-pointer text-base-content 
      border-b-2 border-transparent 
      hover:border-primary 
      focus:outline-none 
      [&.react-tabs__tab--selected]:border-primary 
      [&.react-tabs__tab--selected]:text-primary">
      Listed Books
    </Tab>

    <Tab className="px-4 py-2 cursor-pointer text-base-content 
      border-b-2 border-transparent 
      hover:border-primary 
      focus:outline-none 
      [&.react-tabs__tab--selected]:border-primary 
      [&.react-tabs__tab--selected]:text-primary">
      Wishlist
    </Tab>
  </TabList>

  <TabPanel className="mt-4 text-base-content">
    <Listed/>
  </TabPanel>

  <TabPanel className="mt-4 text-base-content">
    <h2> <Wish/> </h2>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default Books;