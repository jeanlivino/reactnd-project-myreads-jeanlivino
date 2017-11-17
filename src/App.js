import React from 'react'
import { Route } from 'react-router-dom'
/** import * as BooksAPI from './BooksAPI' **/
import MyList from './MyList'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchBooks} />
        <Route exact path="/" component={MyList} />
    </div>
    )
  }
}

export default BooksApp
