import React from 'react'
import { Route } from 'react-router-dom'
import MyList from './MyList'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      query: '',
      booksQuery: []
    };
  }

  componentDidMount(){
  BooksAPI.getAll().then((books)=>{
    this.setState({books})
  })
}

  updateBooks = (book, shelf) => {
      book.shelf = shelf // atualizando a shelf do book
      BooksAPI.update(book, shelf).then(() => {
      this.setState({ booksQuery : this.state.books.filter(b => b.id === book.id).concat([ book ]) })
    })
  }

  search = (query) => {
    this.setState({ query: query });
    BooksAPI.search(this.state.query, 20).then((books) => {
      books.map(book => (this.state.books.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
       this.setState({booksQuery: books})
     })

  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks
            booksList={this.state.booksQuery}
            updateBooks={this.updateBooks}
            search={this.search}
         />)}
      />

        <Route exact path="/" render={() => (
          <MyList
            books={this.state.books}
            updateBooks={this.updateBooks}
            />
          )}
        />
      </div>
    )
  }
}


export default BooksApp
