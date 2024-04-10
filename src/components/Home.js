import Book from 'components/Book';
import { Link } from 'react-router-dom';

const Home = ({ books, bookShelf }) => {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>
          <div className='bookshelf'>
            <h2 className='bookshelf-title'>Currently Reading</h2>
            <div className='bookshelf-books'>
              <ol className='books-grid'>
                {books.filter((bookCheck) => bookCheck.shelf === 'currentlyReading')
                  .map((bookCheck) => (
                    <li key={bookCheck.id}>
                      <Book books={bookCheck} bookShelf={bookShelf} Shelf='currentlyReading' />
                    </li>
                  ))}
              </ol>
            </div>
          </div>
          <div className='bookshelf'>
            <h2 className='bookshelf-title'>Want to Read</h2>
            <div className='bookshelf-books'>
              <ol className='books-grid'>
                {books.filter((bookCheck) => bookCheck.shelf === 'wantToRead').map((bookCheck) => (
                    <li key={bookCheck.id}>
                      <Book books={bookCheck} bookShelf={bookShelf} Shelf='wantToRead' />
                    </li>
                  ))}
              </ol>
            </div>
          </div>
          <div className='bookshelf'>
            <h2 className='bookshelf-title'>Read</h2>
            <div className='bookshelf-books'>
              <ol className='books-grid'>
                {books.filter((bookCheck) => bookCheck.shelf === 'read').map((bookCheck) => (
                    <li key={bookCheck.id}>
                      <Book books={bookCheck} bookShelf={bookShelf} Shelf='read' />
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className='open-search'>
        <Link to='/Search'>Add a book</Link>
      </div>
    </div>
  );
};

export default Home;
