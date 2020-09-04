import React, { useState, useEffect } from 'react';
import {BrowserRouter as  Switch, Route, Link, useParams} from "react-router-dom";

interface MemberItem{
 name: string;
 email: string;
 checkedOutBooks: [];

}

export function IndividualMember() {
    const [item, setItem] = useState<MemberItem>({name: '', email: '',  checkedOutBooks: []})
    useEffect(() => {
        fetch(`http://localhost:3001/members/${id}`)
            .then(response => response.json())
            .then(json => setItem(json.member))
    }, [])
    let { id } = useParams();
  return <section>
  <h2>Manage Member {id}</h2>
<div> Name: {item.name}</div>
<div> Email: {item.email}</div>
  <div>Checked Out Books: {item.checkedOutBooks}</div>
</section>
  }



//   interface Item { 
//    name: string;
//    email: string;
//    checkedOutBooks: [];
//   }
// export function ManageMembers() {
//         const [item, setItem] = useState<Item>({name: "", email: "b", checkedOutBooks: []})
//         useEffect(() => {
//             fetch(`http://localhost:3001/members/${id}`)
//                 .then(response => response.json())
//                 .then(json => setItem(json.member))
//         }, [])
//         let { id } = useParams();
//     return <section>
//     <h2>Manage Member {id}</h2>
//   <div> Name: {item.name}</div>
//   <div> Email: {item.email}</div>
//     <div>Checked Out Books: {item.checkedOutBooks}</div>
//   </section>
//   }