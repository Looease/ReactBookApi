import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import {BrowserRouter as  Switch, Route, Link, useParams} from "react-router-dom";


interface AddBook{
    title: string;
    author: string;
    published_date: number;
    isbn: number;
    cover_image_url: any;

}
export function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState ("");   
    const [publishDate, setPublishedDate] = useState ("");
    const [coverImageUrl, setCoverImageUrl] = useState ("");
    const [isbn, searchIsbn] =useState("");

    const data = {
                title: title, 
                author: author,
                coverImageUrl: coverImageUrl,
                publishDate: publishDate
            } 

    const setSearch = (event: FormEvent) => {
            event.preventDefault()
            fetch(`http://localhost:3001/books/by-isbn/${isbn}`)
                .then(response => response.json())
                .then(json => {
                    setTitle(json.title)
                    setAuthor(json.author)
                    setPublishedDate(json.publishDate)
                    setCoverImageUrl(json.coverImageUrl)
                })
        }


   const submitForm = (event: FormEvent) =>{
    event.preventDefault()
    fetch("http://localhost:3001/books/new", {
        method: "post",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
    })
   }
    return (
      <section>
        <h1>Add Book</h1>

        <form onSubmit={setSearch}>
        <label htmlFor="isbn">Search by isbn</label>
        <input type="text" id="isbn" onChange={event => searchIsbn(event.target.value)}></input>
        <button onClick={setSearch}>Search</button>
        </form>
  
        <form onSubmit={submitForm} >
          Add Book
         
          <label htmlFor="title">Title</label>          
          <input type="text" id="title" value={title} onChange={event => setTitle(event.target.value)}></input>
         
          <label htmlFor="author">Author Name</label>     
          <input type="text" id="author" value={author} onChange={event => setAuthor(event.target.value)}></input>

          <label htmlFor="publishDate">Published</label>     
          <input type="text" id="publishDate" value={publishDate} onChange={event => setPublishedDate(event.target.value)}></input>

          <label htmlFor="coverImageUrl">Cover Image URL</label>     
          <input type="text" id="coverImageUrl" alt="Book Cover" value={coverImageUrl} onChange={event => setCoverImageUrl(event.target.value)}></input>

            <button type="submit" value="Add">
              Add
      </button>
    </form>
    </section>
    )
  }



