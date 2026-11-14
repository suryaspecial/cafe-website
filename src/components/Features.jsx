
import "./Features.css";
import { Coffee } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Quality Coffee",
    description:
      "We source the finest beans and brew every cup to perfection.",
    image: "/images/quality-coffee.webp",
  },
  {
    id: 2,
    title: "Fresh & Delicious",
    description:
      "From pastries to meals, everything is made fresh daily.",
    image: "/images/fresh-food.webp",
  },
  {
    id: 3,
    title: "Cozy Atmosphere",
    description:
      "A warm and welcoming space to relax, work, or catch up.",
    image: "/images/cozy-atmosphere.webp",
  },
];

function Features() {
  return (
    <section className="features-section" id="about">
      <div className="features-container">

        <div className="features-heading">
          <span className="features-coffee">
            <Coffee />
          </span>
          <h2>Why Choose Us?</h2>
          <p>
            We're passionate about quality, comfort, and
            creating memorable moments for every guest.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <img
                src={feature.image}
                alt={feature.title}
                className="feature-image"
              />

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <a href="#menu" className="feature-btn">
                Learn More
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;
