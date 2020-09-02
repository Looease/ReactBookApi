import React from 'react';
import "./header.scss"
import {
    Link
} from "react-router-dom";
export const Header = () => {
    return (
        <section>
           
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <div className="dropdown">
                        <button className="dropbtn" onClick={() => { }}>Books
                  <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content" id="myDropdown">
                            <Link to="/books">List of Books</Link>
                        </div>
                    </div>

                    <div className="dropdown">
                        <button className="dropbtn" onClick={() => { }}>Members
                          <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content" id="myDropdown">
                            <Link to="/users">List of Members</Link>
                        </div>
                    </div>
                </nav>
 
        </section>
    )
};


