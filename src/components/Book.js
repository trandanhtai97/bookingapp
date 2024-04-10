const Book = ({ books, bookShelf, Shelf }) => {
  return (
    <div className='book'>
      <div className='book-top'>
        <div className='book-cover' style={{
                      width: 130,
                      height: 193,
                      margin:10 ,   backgroundImage:
                      books.imageLinks!==undefined?`url(${books.imageLinks.thumbnail})`:"",
                    
                    }}></div>
        <div className='book-shelf-changer'>
          <select onChange={(e) => bookShelf(books, e.target.value)} value={Shelf}>
          <option value="none" disabled>
                        Move to...
                      </option>
                      <option value="currentlyReading">
                        Currently Reading
                      </option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read" >Read</option>
                      {books.shelf==="None" ? <option value="None" >None</option>:""}  
          </select>
        </div>
      </div>
      <div className='book-title'>{books.title}</div>
      <div className='book-authors'>{books.authors}</div>
    </div>
  );
};

export default Book;
