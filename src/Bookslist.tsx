import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';


interface Book {
    title: string;
    author: string;
    id: number;
}
export function BooksList() {
    const [books, setBooks] = useState<Book[]>([])
    const [search, setSearch] = useState("")
    const [mode, setMode] = useState("Loading...")

    useEffect(() => {
        setMode("Loading...")
        fetch(`http://localhost:3001/books?search=${search}`).then(response => response.json())
            .then(json => setBooks(json.books))
            .then(() => { setMode("Ready") })
    }, [search])

    
    const updateSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const newSearch = event.target.value
        setSearch(newSearch);
    }
    return (
        <div>
            <h1>Books</h1>
            <label>
                <input type="text" value={search} onChange={updateSearch} placeholder="Search..."></input>
            </label>

            {mode === "Ready" && <SearchResults books={books}></SearchResults>}
            {mode === "Loading" && <p>Loading</p>}
        </div>

    );
}
interface BookProps {
    book: Book;
}


const Book = (props: BookProps) => {
    return <li><Link to={`/books/${props.book.id}`}>{props.book.author}, {props.book.title} </Link></li>
};

// const Book = ({ book }: BookProps) => {
//     return <li>{book.author}, {book.title}</li>
// };


interface SearchResultsProps {
    books: Book[];
};
function SearchResults(props: SearchResultsProps) {
    const bookList = props.books.map((book) => {
        return <Book book={book}></Book>
    })
    if (props.books.length === 0) {
        return (
            <p>No search results</p>
        )
    }
    return (
        <section>
            <h2>List of Books</h2>
            <Link to="/add/book"><button>Add Books</button></Link>           
            <ul>
                {bookList}
            </ul>
        </section>
    )
}

