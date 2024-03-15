import React from 'react'

import { Link } from "react-router-dom"
import "./Navbar.css";


export const Navbar = () => {
   return (
      <nav>
         <Link className="title">HAVEN </Link>
         <ul>
            <li>
               <Link to="/">Home</Link>
            </li>
            <li>
               <Link to="/experts">Experts</Link>
            </li>

            <li>
               <Link to="/faq">Faq</Link>
            </li>
            <li>
               <Link to="/blog">Blog</Link>
            </li>
            <li>
                  <div class="button-container">
                     <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <a href="https://calendly.com/havencybersecurityconsulting/first-session">Book Appointment</a>
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                     </button>
                  </div>
            </li>
         </ul>
      </nav>
   );

};