import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import { Debounce } from 'react-throttle';

class SearchBooks extends React.Component {

  state = {
    query: '',
    books: []
  }

search = (query) => {
  this.setState({ query: query });
  BooksAPI.search(this.state.query, 20).then((books) => {
    this.setState({ books })
  })
}

update = (book, shelf) => {
    book.shelf = shelf // atualizando a shelf do book

    BooksAPI.update(book, shelf).then(() => {
    this.setState({ books : this.state.books.filter(b => b.id === book.id).concat([ book ]) })
  })
}

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <Debounce time="400" handler="onChange">
              <input type="text"
                onChange={(e) => this.search(e.target.value)}
                placeholder="Search by title or author"
              />
            </Debounce>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map(book =>
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")`}}></div>
                    <div className="book-shelf-changer">
                      <select value={book.shelf} onChange={(e) => this.update(book, e.target.value)}>
                        <option value="none" disabled>Move to...</option>
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
      </div>
    )
  }
}

export default SearchBooks
