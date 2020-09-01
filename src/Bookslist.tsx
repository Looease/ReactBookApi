import React, { useState, useEffect } from 'react';

interface Book{
    title: string;
    author: string;
}

export function BooksList() {
    const [books, setBooks] = useState<Book[]>([])

    useEffect(() => {
        fetch("http://localhost:3001/books").then(response => response.json()).then(json => setBooks(json.books))
    }, [])
    if (books.length === 0) {
        return <div>Loading</div>
    }
    const bookList = books.map((book) => {
        return <Book book={book}></Book>
    })
    return (
        <div>
            <h2>List of Books</h2>
            <ul>
            {bookList}
            </ul>
        </div>

    );
}

interface BookProps {
    book: Book;
}

const Book = ({book}: BookProps) => {
    return <li>{book.author}, {book.title}</li>
};