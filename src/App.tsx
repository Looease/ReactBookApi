import React from 'react';
import './App.scss';
import './header.scss';
import { Header } from './Header';
import { Footer } from './Footer';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import { BooksList } from "./Bookslist"
import { IndividualBook } from "./BookID"
import {AddBook} from "./AddBook"
import {AddMember} from "./AddMember"
import {MembersList} from "./Memberlist"
import {IndividualMember} from "./MemberID"

export const App = () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path="/books">
          <BooksList />
        </Route>
        <Route path="/books/:id">
          <IndividualBook />
        </Route>
        <Route exact path="/add/book">
          <AddBook />
        </Route>
        <Route exact path="/members">
          <MembersList />
        </Route>
        <Route exact path="/members/:id">
          <IndividualMember />
        </Route>
        <Route exact path="/add/member">
          <AddMember />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}
function HomePage() {
  return <h2>Home</h2>;
}



export default App;



