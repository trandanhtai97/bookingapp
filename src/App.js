import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'components/Home';
import Search from 'components/Search';
import * as BooksAPI from 'services/BooksAPI';

function App() {
  const [books,setBooks]=useState([]);
  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setBooks(books);
    });
  }, []);

  const bookShelf = async(book,shelf)=>{
    const res = await BooksAPI.update(book,shelf);
    book.shelf=shelf;
    const newBooks=books.filter(b=>book.id!==b.id).concat([book]);
    setBooks(newBooks);
    return res;
  };

  return (
    <div className='app'>
      <Routes>
      <Route exact path="/" element={<Home books={books} bookShelf={bookShelf}  />} />
        <Route exact path="/Search" element={<Search books={books} bookShelf={bookShelf}/>} />
      </Routes>
    </div>
  );
}

export default App;
