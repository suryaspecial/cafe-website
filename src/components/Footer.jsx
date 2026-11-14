import "./Footer.css";

import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP
} from "react-icons/fa";

function Footer() {
  const quickLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#about" },
    { id: 3, name: "Menu", link: "#menu" },
    { id: 4, name: "Gallery", link: "#gallery" },
    { id: 5, name: "Contact", link: "#contact" }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="footer" id="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>CAFÉ</h2>
          <span>COFFEE & MORE</span>

          <p>
            A perfect place to enjoy freshly brewed coffee,
            delicious treats and beautiful moments.
          </p>

          <div className="social-icons">
             <a href="#" aria-label="Instagram">
             <FaInstagram />
             </a>

             <a href="#" aria-label="Facebook">
             <FaFacebookF />
             </a>

             <a href="#" aria-label="Pinterest">
             <FaPinterestP />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <ul>
            {quickLinks.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Opening Hours */}
        <div className="footer-hours">
          <h3>Opening Hours</h3>

          <p>Monday - Friday</p>
          <span>7:00 AM - 9:00 PM</span>

          <p>Saturday - Sunday</p>
          <span>8:00 AM - 10:00 PM</span>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h3>Newsletter</h3>

          <p>
            Subscribe to receive our latest updates
            and special offers.
          </p>

          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />

            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © 2026 Café. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;