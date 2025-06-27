import { Link } from "react-router-dom"
import "../styles/404.css"

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-description">
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong
          URL.
        </p>
        <div className="error-actions">
          <Link to="/" className="home-button">
            <i className="ri-home-line"></i>
            Back to Home
          </Link>
          <Link to="/resume" className="resume-button">
            <i className="ri-file-user-line"></i>
            View Resume
          </Link>
        </div>
      </div>
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>
    </div>
  )
}
