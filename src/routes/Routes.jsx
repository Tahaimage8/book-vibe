import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Books from "../pages/books/Books";
import HomePage from "../pages/homepage/HomePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import BookDetails from "../pages/bookDetails/BookDetails";

export const router = createBrowserRouter([{
  path: '/',
  element: <MainLayout/>,
  children:[
    {
      index : true,
      element: <HomePage/>
    },
    {
      path: 'books',
      element: <Books/>,
    },
    {
      path: '/bookDetails/:id',
      Component: BookDetails,
      loader: ()=> fetch('/booksData.json'),
    }

  ], 
  errorElement: <ErrorPage/>
},


])