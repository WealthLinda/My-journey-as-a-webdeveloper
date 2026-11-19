/*import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../index.css"; // Ensure styles are available

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav
      style={{
        background: "var(--primary)",
        color: "var(--text-light)",
        padding: "1rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "var(--accent)",
          }}
        >
          JAYLINKUP STYLES
        </Link>

        {/* Desktop Menu */}
        /*<ul className="desktop-menu" style={{ display: "flex", gap: "2rem" }}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                style={{
                  color:
                    location.pathname === link.path
                      ? "var(--accent)"
                      : "var(--text-light)",
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/cart" style={{ position: "relative" }}>
              Cart ({cart.reduce((acc, item) => acc + item.qty, 0)})
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        /*<button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "white",
            fontSize: "1.5rem",
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      /*{isOpen && (
        <ul
          style={{
            background: "#222",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/cart" onClick={() => setIsOpen(false)}>
              Cart ({cart.reduce((acc, item) => acc + item.qty, 0)})
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

// Add mobile toggle CSS dynamically or in index.css
// @media (max-width: 768px) { .desktop-menu { display: none !important; } .mobile-toggle { display: block !important; } }
export default Navbar;

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../index.css"; // Ensure styles are available

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav
      style={{
        background: "var(--primary)",
        color: "var(--text-light)",
        // Removed padding from here and moved it to the main container below
      }}
    >
      {/* --- NEW TOP BAR --- */}
      /*<div
        style={{
          background: "rgba(0, 0, 0, 0.2)", // Slight contrast for the top bar
          padding: "0.5rem 0",
          fontSize: "0.85rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          {/* Left: Social Links */}
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-light)", textDecoration: "none" }}
            >
              Facebook
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-light)", textDecoration: "none" }}
            >
              WhatsApp
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-light)", textDecoration: "none" }}
            >
              TikTok
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-light)", textDecoration: "none" }}
            >
              Instagram
            </a>
          </div>

          {/* Right: Delivery and OPay */}
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <a
              href="fast delivery"
              style={{
                color: "var(--text-light)",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              🚚 Fast Delivery
            </a>

            <a
              href="fast delivery"
              style={{
                color: "var(--text-light)",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
              }}
            >
              💳 Pay with OPay
            </a>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 0", // Moved padding from <nav> to here
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "var(--accent)",
          }}
        >
          JAYLINKUP STYLES
        </Link>

        {/* Desktop Menu */}
        <ul className="desktop-menu" style={{ display: "flex", gap: "2rem" }}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                style={{
                  color:
                    location.pathname === link.path
                      ? "var(--accent)"
                      : "var(--text-light)",
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/cart" style={{ position: "relative" }}>
              Cart ({cart.reduce((acc, item) => acc + item.qty, 0)})
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "white",
            fontSize: "1.5rem",
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul
          style={{
            background: "#222",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/cart" onClick={() => setIsOpen(false)}>
              Cart ({cart.reduce((acc, item) => acc + item.qty, 0)})
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};*/

// Add mobile toggle CSS dynamically or in index.css
// @media (max-width: 768px) {
//   .desktop-menu { display: none !important; }
//   .mobile-toggle { display: block !important; }
//
//   /* Optional: Center the top bar on mobile */
//   .top-bar {
//     justify-content: center !important;
//     text-align: center;
//   }
// }
export default Navbar;

/*import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! We will get back to you shortly.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container" style={{ padding: "3rem 1rem" }}>
      <div
        className="grid-2"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}
      >
        <div>
          <h2 style={{ marginBottom: "1rem" }}>Get in Touch</h2>
          <p style={{ marginBottom: "1rem" }}>
            Have questions about sizing, bulk orders, logistics and other
            enquiries? Reach out to us.
          </p>
          <p>
            <strong>📍 Address:</strong> Shop FF9 @LosAngelesMall,
            Mabuchi,Abuja. Block B17 shop 3 Wuse Market,Abuja.
          </p>
          <p>
            <strong>📞 Phone:</strong> +234 7055541031
          </p>
          <p>
            <strong>✉️ Email:</strong> wealthlinda06@gmail.com
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#fff",
            padding: "2rem",
            borderRadius: "8px",
            border: "1px solid #eee",
          }}
        >
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem" }}>
              Full Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              style={{
                width: "100%",
                padding: "0.8rem",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem" }}>
              Email Address
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              style={{
                width: "100%",
                padding: "0.8rem",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem" }}>
              Message
            </label>
            <textarea
              rows="4"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              style={{
                width: "100%",
                padding: "0.8rem",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            ></textarea>
          </div>
          <button type="submit" className="btn" style={{ width: "100%" }}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;

import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div
        className="container"
        style={{ padding: "4rem 1rem", textAlign: "center" }}
      >
        <h2>Your cart is empty</h2>
        <Link to="/shop" className="btn" style={{ marginTop: "1rem" }}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: "3rem 1rem" }}>
      <h2 style={{ marginBottom: "2rem" }}>Shopping Cart</h2>
      <div
        className="grid-2"
        style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "2rem" }}
      >
        {/* Cart Items */}
       /* <div>
          {cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "1rem",
                borderBottom: "1px solid #eee",
                padding: "1rem 0",
                alignItems: "center",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
              />
              <div style={{ flex: 1 }}>
                <h4>{item.name}</h4>
                <p>
                  ₦{item.price.toLocaleString()} x {item.qty}
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "0.5rem",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
       /* <div
          style={{
            background: "#fff",
            padding: "1.5rem",
            borderRadius: "8px",
            border: "1px solid #eee",
            height: "fit-content",
          }}
        >
          <h3>Order Summary</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "1rem 0",
            }}
          >
            <span>Subtotal</span>
            <span>₦{cartTotal.toLocaleString()}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "1rem 0",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            <span>Total</span>
            <span>₦{cartTotal.toLocaleString()}</span>
          </div>
          <button className="btn" style={{ width: "100%", marginTop: "1rem" }}>
            Proceed to Checkout (opay)
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Redpolo from "/src/pages/Redpolo.jpeg";
import Longsleeve from "/src/pages/Longsleeve.jpeg";
import palms1 from "/src/images/palms.jpeg";
import polo from "/src/images/polo1.jpeg";
import polo2 from "/src/images/polo2.jpeg";
import polo3 from "/src/images/polo3.jpeg";
import shirt1 from "/src/images/shirt1.jpeg";
import singlet from "/src/images/singlet.jpeg";
import singlet1 from "/src/images/singlet1.jpeg";
import denim from "/src/images/up&down.jpeg";
import croptop from "/src/images/crop1.jpeg";
import pants from "/src/images/denim2.jpeg";

const allProducts = [
  {
    id: 1,
    name: "Redpolo",
    price: 45000,
    category: "Casual",
    image: "/src/pages/Redpolo.jpeg",
  },
  {
    id: 2,
    name: "Longsleeve",
    price: 45000,
    category: "Casual",
    image: "/src/pages/Longsleeve.jpeg",
  },
  {
    id: 3,
    name: "Palms",
    price: 75000,
    category: "Footwear",
    image: "/src/images/palms.jpeg",
  },
  {
    id: 4,
    name: "Designer polo",
    price: 30000,
    category: "Casual",
    image: "/src/images/polo1.jpeg",
  },
  {
    id: 5,
    name: "Polo",
    price: 35000,
    category: "Casual",
    image: "/src/images/polo2.jpeg",
  },
  {
    id: 6,
    name: "Polo",
    price: 40000,
    category: "Casual",
    image: "/src/images/polo3.jpeg",
  },
  {
    id: 7,
    name: "Shirt",
    price: 55000,
    category: "Designer",
    image: "/src/images/shirt1.jpeg",
  },
  {
    id: 8,
    name: "Singlet",
    price: 25000,
    category: "Innerwear",
    image: "/src/images/singlet.jpeg",
  },
  {
    id: 9,
    name: "Singlet",
    price: 25000,
    category: "Innerwear",
    image: "/src/images/singlet1.jpeg",
  },
  {
    id: 10,
    name: "Denim",
    price: 105000,
    category: "Casual",
    image: "/src/images/up&down.jpeg",
  },
  {
    id: 11,
    name: "Croptop",
    price: 45000,
    category: "Casual",
    image: "/src/images/crop1.jpeg",
  },
  {
    id: 12,
    name: "Denim",
    price: 65000,
    category: "Pants",
    image: "/src/images/denim2.jpeg",
  },
];

const Shop = () => {
  const { addToCart } = useCart();

  return (
    <div className="container" style={{ padding: "2rem 1rem" }}>
      <h2 style={{ marginBottom: "2rem" }}>All Collections</h2>
      <div
        className="grid-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem",
        }}
      >
        {allProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #eee",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
            </Link>
            <div style={{ padding: "1rem" }}>
              <h4>{product.name}</h4>
              <p style={{ color: "#666", fontSize: "0.9rem" }}>
                {product.category}
              </p>
              <p style={{ fontWeight: "bold", margin: "0.5rem 0" }}>
                ₦{product.price.toLocaleString()}
              </p>
              <button
                className="btn"
                onClick={() => addToCart(product)}
                style={{ width: "100%", borderRadius: "8px" }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Shop;

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Redpolo from "/src/pages/Redpolo.jpeg";
import Longsleeve from "/src/pages/Longsleeve.jpeg";
import palms1 from "/src/images/palms.jpeg";
import polo from "/src/images/polo1.jpeg";
import polo2 from "/src/images/polo2.jpeg";
import polo3 from "/src/images/polo3.jpeg";
import shirt1 from "/src/images/shirt1.jpeg";
import singlet from "/src/images/singlet.jpeg";
import singlet1 from "/src/images/singlet1.jpeg";
import denim from "/src/images/up&down.jpeg";
import croptop from "/src/images/crop1.jpeg";
import pants from "/src/images/denim2.jpeg";

const allProducts = [
  {
    id: 1,
    name: "Redpolo",
    price: 45000,
    category: "Casual",
    image: "/src/pages/Redpolo.jpeg",
  },
  {
    id: 2,
    name: "Longsleeve",
    price: 45000,
    category: "Casual",
    image: "/src/pages/Longsleeve.jpeg",
  },
  {
    id: 3,
    name: "Palms",
    price: 75000,
    category: "Footwear",
    image: "/src/images/palms.jpeg",
  },
  {
    id: 4,
    name: "Designer polo",
    price: 30000,
    category: "Casual",
    image: "/src/images/polo1.jpeg",
  },
  {
    id: 5,
    name: "Polo",
    price: 35000,
    category: "Casual",
    image: "/src/images/polo2.jpeg",
  },
  {
    id: 6,
    name: "Polo",
    price: 40000,
    category: "Casual",
    image: "/src/images/polo3.jpeg",
  },
  {
    id: 7,
    name: "Shirt",
    price: 55000,
    category: "Designer",
    image: "/src/images/shirt1.jpeg",
  },
  {
    id: 8,
    name: "Singlet",
    price: 25000,
    category: "Innerwear",
    image: "/src/images/singlet.jpeg",
  },
  {
    id: 9,
    name: "Singlet",
    price: 25000,
    category: "Innerwear",
    image: "/src/images/singlet1.jpeg",
  },
  {
    id: 10,
    name: "Denim",
    price: 105000,
    category: "Casual",
    image: "/src/images/up&down.jpeg",
  },
  {
    id: 11,
    name: "Croptop",
    price: 45000,
    category: "Casual",
    image: "/src/images/crop1.jpeg",
  },
  {
    id: 12,
    name: "Denim",
    price: 65000,
    category: "Pants",
    image: "/src/images/denim2.jpeg",
  },
];

const Shop = () => {
  const { addToCart } = useCart();

  return (
    <div className="container" style={{ padding: "2rem 1rem" }}>
      <h2 style={{ marginBottom: "2rem" }}>All Collections</h2>
      <div
        className="grid-4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem",
        }}
      >
        {allProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #eee",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
            </Link>
            <div style={{ padding: "1rem" }}>
              <h4>{product.name}</h4>
              <p style={{ color: "#666", fontSize: "0.9rem" }}>
                {product.category}
              </p>
              <p style={{ fontWeight: "bold", margin: "0.5rem 0" }}>
                ₦{product.price.toLocaleString()}
              </p>
              <button
                className="btn"
                onClick={() => addToCart(product)}
                style={{ width: "100%", borderRadius: "8px" }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Shop;





