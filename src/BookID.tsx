import React, { useState, useEffect } from 'react';
import {BrowserRouter as  Switch, Route, Link, useParams} from "react-router-dom";

interface BookItem{
    title: string;
    author: string;
    id: number;
    published: number;
    isbn: number;
    copies: number;

}



export function IndividualBook() {
    const [item, setItem] = useState<BookItem>({title: '', author: '', id: 0, published: 0, isbn: 0, copies: 0})
    useEffect(() => {
        fetch(`http://localhost:3001/books/${id}`)
            .then(response => response.json())
            .then(json => setItem(json.book))
    }, [])
    let { id } = useParams();
  return <section>
      <h3>{item.title}</h3>
        <div>{}</div>
      </section>;
  }