import { Link } from 'react-router-dom';
import * as BooksAPI from 'services/BooksAPI';
import Book from 'components/Book';
import { useState } from 'react';

const Search = ({ books, bookShelf }) => {
  const [text,setText]=useState('');
  const [queryBooks,setQueryBooks]=useState([]);

  const searchText = (text) => {
    setText(text);
    searchBook(text);
  };

  const searchBook = (text) => {
    if (text.length === 0) {
      setQueryBooks([]);
    } else {
      BooksAPI.search(text).then((queryBooks) => {
        if (!queryBooks.error) {
          setQueryBooks(queryBooks);
        } else {
          setQueryBooks([]);
        }
      });
    }
  };
  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <Link to='/' className='close-search'>
          Close
        </Link>

        <div className='search-books-input-wrapper'>
          <input type='text' placeholder='Search by title, author'
           value={text} onChange={(e) => searchText(e.target.value)} />
        </div>
      </div>

      <div className='search-books-results'>
        <ol className='books-grid'>
          {queryBooks.map((queryBook) => {
            let shelf = 'none';
            books.forEach((book) => {
              if (book.id === queryBook.id) {
                shelf = book.shelf;
              } else {
                queryBook.shelf = 'none';
              }
            });

            return (
              <li key={queryBook.id}>
                <Book books={queryBook} bookShelf={bookShelf} Shelf={shelf} />
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Search;
