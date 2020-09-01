import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './header.scss';
import { Header } from './Header';
import { Footer } from './Footer';
import {
  BrowserRouter as Router, Switch, Route, Link, useParams
} from "react-router-dom";
import {BooksList} from "./Bookslist"


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
          <ManageBooks />
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

function ManageBooks() {
  let { id } = useParams();
return <h2>Manage Books {id}</h2>;
}

function Members() {
  return <h2>Members</h2>;
}
function ManageMembers() {
  return <h2>Manage Members</h2>;
}


export default App;



