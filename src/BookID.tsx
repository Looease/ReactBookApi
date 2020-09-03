import React, { useState, useEffect } from 'react';
import {BrowserRouter as  Switch, Route, Link, useParams} from "react-router-dom";

interface BookItem{
    title: string;
    author: string;
    id: number;
    published_date: number;
    isbn: number;
    cover_image_url: any;

}

export function IndividualBook() {
    const [item, setItem] = useState<BookItem>({title: '', author: '', id: 0, published_date: 0, isbn: 0, cover_image_url: ''})
    useEffect(() => {
        fetch(`http://localhost:3001/books/${id}`)
            .then(response => response.json())
            .then(json => setItem(json.book))
    }, [])
    let { id } = useParams();
  return <section>
      <h1>{item.title}</h1>
      <h3>{item.author}</h3>
      <ul>
          <li>Id = {item.id}</li>
          <li> Published date ={item.published_date}</li>
          <li>ISBN = {item.isbn}</li>
          <li><img src={item.cover_image_url} alt="Book cover"/></li>
      </ul>
      
        <div>{}</div>
      </section>;
  }