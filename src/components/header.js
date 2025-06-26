import { NavLink } from "react-router-dom"
import "../styles/header.css"
import logoImage from "../images/homelogo.png" // You'll need to add your logo image here

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="logo">
        <img src={logoImage || "/placeholder.svg?height=50&width=156"} alt="Portfolio Logo" className="logo-image" />
      </NavLink>
      <nav className="navbar">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          About Me
        </NavLink>
        <NavLink to="/resume" className={({ isActive }) => (isActive ? "active" : "")}>
          Resume
        </NavLink>
      </nav>
    </header>
  )
}
