import React from 'react'
import {Link} from 'react-router-dom'
import {Debounce} from 'react-throttle';
import sortBy from 'sort-by'

class SearchBooks extends React.Component {

  render() {
    const {booksList, updateBooks, search} = this.props
    return (<div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <Debounce time="400" handler="onChange">
            <input type="text" onChange={(e) => search(e.target.value)} placeholder="Search by title or author"/>
          </Debounce>

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {booksList.sort(sortBy('title')).map(book =>
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url("${book.imageLinks.thumbnail}")`
                    }}></div>
                  <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={(e) => updateBooks(book, e.target.value)}>
                      <option value="none" disabled="disabled">Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          )}
        </ol>
      </div>
    </div>)
  }
}

export default SearchBooks
