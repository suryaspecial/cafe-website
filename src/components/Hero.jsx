import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-welcome">
          Welcome to Our Café
        </p>

        <h1>
          Good Coffee,
          <br />
          Great Moments
        </h1>

        <p className="hero-description">
          Savor handcrafted coffee, fresh pastries, and cozy vibes.
          <br />
          Your perfect daily escape.
        </p>

        <a href="#menu" className="hero-btn">
          View Our Menu
        </a>

      </div>

    </section>
  );
}

export default Hero;