import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class MyList extends React.Component {
render()  {

   const { books, onUpdateBooks } = this.props

    return (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf
          className="currentlyReading"
          bookArray={books}
          onUpdateBooks={onUpdateBooks}
          bookStatus="currentlyReading"
          shelfTitle="Currently Reading"
        />
        <BookShelf
          className="wantToRead"
          bookArray={books}
          onUpdateBooks={onUpdateBooks}
          bookStatus="wantToRead"
          shelfTitle="Want to Read"
        />
        <BookShelf
          className="read"
          bookArray={books}
          onUpdateBooks={onUpdateBooks}
          bookStatus="read"
          shelfTitle="Read"
        />
      </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
  </div>
  )
}
}

export default MyList
