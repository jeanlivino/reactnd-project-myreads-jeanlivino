import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'

class MyList extends React.Component {

  state = {
    books: []
  }

  componentDidMount(){
  BooksAPI.getAll().then((books)=>{
    this.setState({books})
  })
}

  updateBooks = (book, shelf) => {
      book.shelf = shelf // atualizando a shelf do book
      BooksAPI.update(book, shelf).then(() => {
      this.setState({ books : this.state.books.filter(b => b.id === book.id).concat([ book ]) })
    })
  }

  render()  {
    return (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <BookShelf
          className="currentlyReading"
          bookArray={this.state.books}
          updateBooks={this.updateBooks}
          bookStatus="currentlyReading"
          shelfTitle="Currently Reading"
        />
        <BookShelf
          className="wantToRead"
          bookArray={this.state.books}
          updateBooks={this.updateBooks}
          bookStatus="wantToRead"
          shelfTitle="Want to Read"
        />
        <BookShelf
          className="read"
          bookArray={this.state.books}
          updateBooks={this.updateBooks}
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
