import React from 'react'
import {Link} from 'react-router-dom'
import {Debounce} from 'react-throttle';
import sortBy from 'sort-by'
import Book from './Book'

class SearchBooks extends React.Component {

  render() {
    const {booksList, onUpdateBooks, onSearch} = this.props
    return (<div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <Debounce time="400" handler="onChange">
            <input type="text" onChange={(e) => onSearch(e.target.value)} placeholder="Search by title or author"/>
          </Debounce>

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {booksList.sort(sortBy('title')).map(book =>
            <Book
              onUpdateBooks={onUpdateBooks}
              book={book}
            />
          )}
        </ol>
      </div>
    </div>)
  }
}

export default SearchBooks
