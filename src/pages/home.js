import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/home.css"
import pic from "../images/pic.png"

export default function Home() {
  return (
    <>
      <Header />
      <section className="home" style={{ backgroundImage: `url(${pic})` }}>
        <div className="home-info">
          <h1>Vargas, John Kenneth</h1>
          <h3>Computer Engineer</h3>
          <p>
            Passionate about crafting innovative solutions and building the future through technology. Currently
            pursuing my degree in Computer Engineering while developing practical skills in programming, web
            development, and system design.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
