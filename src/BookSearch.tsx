import React, { useState, useEffect } from 'react';
import BookList from "./Bookslist";



// //List single book 
// export const getBookById = (id : any) => {
//     return client.select("*").from<Book>("book")
//     .where('book_id', id).first();
// }; 

// //////API
// app.get("/book/:bookid", async(request, response) => {
//     const bookID = parseInt(request.params.bookid); 
//     const model = {
//         book:  await getBookById(bookID)
//     };   
//     response.render('bookInfo.html', model)
// });

// ////////////////////////////


// interface SingleBook{
//     title: string;
//     author: string;
// }
export function BookSearch() {
//     const [book, getBook] = useState<SingleBook[]>([])

//     useEffect(() => {
//         fetch("http://localhost:3001/books?search=%'${input}").then(response => response.json()).then(json => getBook(json.books))
//     }, [])
//     if (books.length === 0) {
//         return   <div>
//         <form>
//             <input placeholder="Type here...">{bookList}</input>
//         </form>          
//     </div>
//     }
//     const bookList = books.map((book) => {
//         return <Book book={book}></Book>
//     })
//     return (
//         <div>
//             <form>
//                 <input placeholder={JAVASCRIPT}>{bookList}</input>
//             </form>          
//         </div>

//     );
// }

// interface SingleBook{

// }

// interface BookProps {
//     book: Book;
// }

// const Book = ({book}: BookProps) => {
//     return <li>{book.author}, {book.title}</li>
// };


