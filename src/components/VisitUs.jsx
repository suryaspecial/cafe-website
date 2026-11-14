
import "./VisitUs.css";
import {Clock} from "lucide-react";

function VisitUs() {
  const galleryImages = [
    {
      id: 1,
      image:
        "/images/gallery1.webp",
      alt: "Cafe exterior"
    },
    {
      id: 2,
      image:
        "/images/gallery2.webp",
      alt: "Barista preparing coffee"
    },
    {
      id: 3,
      image:
        "/images/gallery3.webp",
      alt: "Cozy cafe interior"
    }
  ];

  return (
    <section className="visit-section" id="contact">

      <div className="visit-content">

        {/* Visit Information */}
        <div className="visit-info">

          <h2>Visit Us Today</h2>
          <div className="visit-map">
            <p className="visit-description">
            Come for the coffee, stay for the
            good vibes!
          </p>
           
          </div>
          
           <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019123456789!2d-122.419415484681!3d37.7749297797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sYour%20Cafe%20Location!5e0!3m2!1sen!2sus!4v1610000000000"
              width="80%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Cafe Location"></iframe>
         
        </div>

        {/* Image Gallery */}
        <div className="visit-gallery">

          {galleryImages.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.alt}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default VisitUs;
