import React from 'react';
import Header from '../components/header';
import '../styles/home.css';
import pic from '../images/pic.png';

export default function Home() {
  return (
    <>
      <Header />
      <section className="home" style={{ backgroundImage: `url(${pic})` }}>
        <div className="home-info">
          <h1>Hello, I'm John Kenneth Vargas</h1>
          <h3>3rd Year Computer Engineer</h3>
          <p>Passionate about crafting innovative solutions ...</p>
        </div>
      </section>
    </>
  );
}
