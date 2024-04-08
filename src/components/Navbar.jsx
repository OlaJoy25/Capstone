import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

export const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  return (
    <nav className="w-full">
      <Link className="title">HAVEN </Link>
      <ul className="md:flex hidden items-center gap-8 pr-8">
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
          <div className="button-container">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <a href="https://calendly.com/havencybersecurityconsulting/first-session">
                Book Appointment
              </a>
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </li>
      </ul>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-menu mr-8 h-7 w-7 md:hidden"
        onClick={() => setShowMobile(!showMobile)}
      >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
      </svg>

      {showMobile && (
        <div
          className="fixed inset-0 z-[20000000000] flex h-full w-full justify-end bg-black/50 backdrop-blur-sm"
          onClick={(e) =>
            e.target === e.currentTarget ? setShowMobile(false) : null
          }
        >
          <div className="relative h-full w-full divide-y flex flex-col justify-between divide-gray-600 rounded-lg bg-gray-700 shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              onClick={() => setShowMobile(false)}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x absolute right-1 top-1 cursor-pointer text-gray-500"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
            <ul
              className="divide-y-[1px] divide-gray-500 px-4 py-2 pt-[50px] text-[20px] flex flex-col"
              aria-labelledby="dropdownInformationButton"
            >
              <li>
                <Link
                  href="/"
                  className="block px-4 py-3 !text-gray-200 hover:bg-gray-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/experts"
                  className="block px-4 py-3 !text-gray-200 hover:bg-gray-600"
                >
                  Experts
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="block px-4 py-3 !text-gray-200 hover:bg-gray-600"
                >
                  Faq
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block px-4 py-3 !text-gray-200 hover:bg-gray-600"
                >
                  Blog
                </Link>
              </li>
            </ul>
            <div className="mb-auto h-max absolute bottom-4 w-auto right-4 left-4">
              <button
                type="button"
                className="text-white bg-blue-700 flex justify-center items-center w-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <a href="https://calendly.com/havencybersecurityconsulting/first-session">
                  Book Appointment
                </a>
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
