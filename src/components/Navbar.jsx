import React from 'react'

import {Link} from "react-router-dom"
import "./Navbar.css";


export const Navbar = () => {
    return (
      <nav>
          <Link  className="title">HAVEN </Link>
       <ul>
         <li>
            <Link to="/">Home</Link>
         </li>
         <li>
            <Link to="/experts">Experts</Link>
         </li>
         <li>
            <Link to="/booking">Booking</Link>
         </li>
         <li>
            <Link to="/faq">Faq</Link>
         </li>
         <li>
            <Link to="/blog">Blog</Link>
         </li>
      </ul>
    </nav>
    );
        
};