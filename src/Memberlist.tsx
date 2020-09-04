import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';


interface Member{
    name: string;
    email: string;
}
export function MembersList() {
    const [members, setMember] = useState<Member[]>([])
    const [search, setSearch] = useState("")
    const [mode, setMode] = useState("Loading...")

    useEffect(() => {
        setMode("Loading...")
        fetch(`http://localhost:3001/members?search=${search}`).then(response => response.json())
            .then(json => setMember(json.members))
            .then(() => { setMode("Ready") })
    }, [search])

    
    const updateSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const newSearch = event.target.value
        setSearch(newSearch);
    }
    return (
        <div>
            <h1>Members</h1>
            <label>
                <input type="text" value={search} onChange={updateSearch} placeholder="Search..."></input>
            </label>

            {mode === "Ready" && <SearchResults members={members}></SearchResults>}
            {mode === "Loading" && <p>Loading</p>}
        </div>

    );
}
interface MemberProps {
    member: Member;
}


const MemberListItem = (props: MemberProps) => {
    return <li><Link to={`/members/${props.member.name}`}>{props.member.email}</Link></li>
};

// const Book = ({ book }: BookProps) => {
//     return <li>{book.author}, {book.title}</li>
// };


interface SearchResultsProps {
    members: Member[];
};
function SearchResults(props: SearchResultsProps) {
    const memberList = props.members.map((member) => {
        return <MemberListItem member={member}></MemberListItem>
    })
    if (props.members.length === 0) {
        return (
            <p>No search results</p>
        )
    }
    return (
        <section>
            <h2>List of Books</h2>
            <Link to="/add/member"><button>Add Members</button></Link>           
            <ul>
                {memberList}
            </ul>
        </section>
    )
}

