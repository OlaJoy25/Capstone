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
            <Link to="/booking">
            <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Teal
            <a href="https://calendly.com/havencybersecurityconsulting/first-session"></a></button>
            </Link>
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