'use client';
import Link from 'next/link';
import { useState } from 'react';
import Image from "next/image";

export default function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='bg-white'>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link href="#">
          <Image src={props.Logo} alt="logo" title="" width={120} height={112}></Image>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#Modules">Modules</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Mentors">Mentors</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Testimonials">Testimonials</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#FAQs">FAQs</a>
              </li>
            </ul>
          </div>

          <Link href="#" className='header-btn'>Book a Free Demo</Link>
        </div>
      </nav>
    </header>
  );
}
