import React from 'react'
import sortBy from 'sort-by'
import Book from './Book'

class BookShelf extends React.Component {

  render() {
    const { bookArray, onUpdateBooks, shelfTitle, bookStatus } = this.props
    return (<div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {bookArray.filter(book => book.shelf === bookStatus).sort(sortBy('title')).map(book =>
              <Book
                key={book.id}
                onUpdateBooks={onUpdateBooks}
                book={book}
              />)
            }
          </ol>
      </div>
    </div>)
  }
}

export default BookShelf
