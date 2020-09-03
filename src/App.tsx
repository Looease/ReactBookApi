import React from 'react';
import './App.scss';
import './header.scss';
import { Header } from './Header';
import { Footer } from './Footer';
import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import { BooksList } from "./Bookslist"
import { IndividualBook } from "./BookID"
import  {AddBook} from "./AddBook"


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

        <Route path="/users">
          <Members />
        </Route>
        <Route path="/users/:id">
          <ManageMembers />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}
function HomePage() {
  return <h2>Home</h2>;
}


interface AddBook {
  title: string;
  author: string;
  id: number;
  published_date: number;
  isbn: number;
  cover_image_url: any;
}




function Members() {
  return <h2>Members</h2>;
}
function ManageMembers() {
  return <h2>Manage Members</h2>;
}

export default App;



