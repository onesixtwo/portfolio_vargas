import React from 'react';
import Header from '../components/header';  // Header component
import '../styles/contact.css';            // Stylesheet

export default function Contact() {
  return (
    <>
      <Header />
      <section className="contact">
        <div className="contact-info">
          <h1>Contact Me!</h1>
          <h3><i className="ri-phone-fill" /> 09610388470 / 09922708018</h3>
          <h3><i className="ri-mail-fill" /> vargaskenneth656@gmail.com</h3>
          <nav className="socials">
            <a href="https://www.instagram.com/vargassskenneth/" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-fill" /> Instagram
            </a>
            <a href="https://twitter.com/vargassskenneth" target="_blank" rel="noopener noreferrer">
              <i className="ri-twitter-x-fill" /> Twitter
            </a>
            <a href="https://www.facebook.com/vargassskenneth" target="_blank" rel="noopener noreferrer">
              <i className="ri-facebook-fill" /> Facebook
            </a>
            <a href="https://github.com/onesixtwo" target="_blank" rel="noopener noreferrer">
              <i className="ri-github-fill" /> Github
            </a>
          </nav>
        </div>
      </section>
    </>
  );
}
