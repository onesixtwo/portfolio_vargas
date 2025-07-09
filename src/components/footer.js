import "../styles/footer.css"

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="copyright">
          <p>&copy; 2020 Vargas John Kenneth. All rights reserved.</p>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="contact-item">
            <i className="ri-mail-fill contact-icon"></i>
            <span>vargaskenneth463@gmail.com</span>
          </div>
          <div className="contact-item">
            <i className="ri-phone-fill contact-icon"></i>
            <span>09610388470 / 09922708018</span>
          </div>
          <div className="contact-item">
            <i className="ri-map-pin-fill contact-icon"></i>
            <span>Taguig City, Philippines</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="social-links">
          <a
            href="https://www.instagram.com/vargassskenneth/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon instagram"
            aria-label="Instagram"
          >
            <i className="ri-instagram-fill"></i>
          </a>
          <a
            href="https://www.facebook.com/vargassskenneth"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon facebook"
            aria-label="Facebook"
          >
            <i className="ri-facebook-fill"></i>
          </a>
          <a
            href="https://twitter.com/vargassskenneth"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon twitter"
            aria-label="Twitter"
          >
            <i className="ri-twitter-x-fill"></i>
          </a>
          <a
            href="https://github.com/onesixtwo"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon github"
            aria-label="GitHub"
          >
            <i className="ri-github-fill"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/john-kenneth-vargas-85491b351/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon linkedin"
            aria-label="LinkedIn"
          >
            <i className="ri-linkedin-fill"></i>
          </a>
          <a
            href="https://www.youtube.com/@sixtoninee"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon youtube"
            aria-label="YouTube"
          >
            <i className="ri-youtube-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}
