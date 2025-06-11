// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/home.css'; // or a shared header.css

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="logo">My Portfolio</NavLink>
      <nav className="navbar">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/resume" activeClassName="active">Resume</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </nav>
    </header>
  );
}
