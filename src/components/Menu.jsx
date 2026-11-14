import "./Menu.css";

function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "Cappuccino",
      category: "Coffee",
      price: "₹120",
      image: '/images/coffee.webp',
      description: "Rich espresso topped with creamy milk foam."
    },
    {
      id: 2,
      name: "Cafe Latte",
      category: "Coffee",
      price: "₹140",
      image: '/images/latte.webp',
      description: "Smooth espresso blended with steamed milk."
    },
    {
      id: 3,
      name: "Chocolate Cake",
      category: "Bakery",
      price: "₹100",
      image: '/images/cake.webp',
      description: "Rich and moist chocolate cake with a decadent frosting."
    },
    {
      id: 4,
      name: "Sandwiches",
      category: "Bakery",
      price: "₹90",
      image: '/images/sandwich.webp',
      description: "Delicious sandwiches made with fresh ingredients."
    }
  ];

  return (
    <section className="menu-section" id="menu">

      <div className="menu-heading">
        <p>Our Specialties</p>
        <h2>Menu Highlights</h2>
        <span>
          Discover some of our favorite coffee and bakery treats.
        </span>
      </div>

      <div className="menu-container">

        {menuItems.map((item) => (
          <div className="menu-card" key={item.id}>

            <img
              src={item.image}
              alt={item.name}
              className="menu-image"
            />

            <div className="menu-info">

              <span className="menu-category">
                {item.category}
              </span>

              <h3>{item.name}</h3>

              <p>{item.description}</p>

              <div className="menu-bottom">
                <span className="menu-price">{item.price}</span>
                <button className="menu-order-btn">
                  Order Now
                </button>
              </div>

            </div>

          </div>
        ))}

      </div>
      <div className="menu-footer">
        <a href="#full-menu" className="menu-full-btn">
          View our full menu
        </a>
      </div>

    </section>
  );
}

export default Menu;