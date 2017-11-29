import React  from 'react'
import defaultImage from './img/default-image-book.jpg'

const Books = function(props) {

return(
          <li key={props.book.id}>
            <div className="book">
              <div className="book-top">
                  {
                   (props.book.imageLinks)
                   ? <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:`url(${props.book.imageLinks.thumbnail})` }}></div>
                   : <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${defaultImage})` }}></div>
                  }
                <div className="book-shelf-changer">
                  {
                    (props.book.shelf)
                    ?
                    <select value={props.book.shelf} onChange={(e) => props.onUpdateBooks(props.book, e.target.value)}>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                    :
                    <select value="none" onChange={(e) => props.onUpdateBooks(props.book, e.target.value)}>
                      <option value="none" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  }
                </div>
              </div>
              <div className="book-title">{props.book.title}</div>
              <div className="book-authors">{props.book.authors}</div>
            </div>
          </li>
)
}

export default Books
