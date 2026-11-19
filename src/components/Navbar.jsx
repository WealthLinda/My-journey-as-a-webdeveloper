import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../index.css"; // Ensure styles are available
import "@fortawesome/fontawesome-free/css/all.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setIsOpen(false); // Close mobile menu if open
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Search Icon SVG Component
  const SearchIcon = ({ size = 20, color = "var(--text-light)" }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ cursor: "pointer" }}
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.35-4.35"></path>
    </svg>
  );

  return (
    <nav
      style={{
        background: "var(--primary)",
        color: "var(--text-light)",
      }}
    >
      {/* --- NEW TOP BAR --- */}
      <div
        style={{
          background: "rgba(155, 148, 148, 0.2)",
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
              💳 Pay into OPay
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
          padding: "1rem 0",
          gap: "1.5rem",
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "var(--accent)",
            whiteSpace: "nowrap",
            textDecoration: "none",
          }}
        >
          JAYLINKUP STORE
        </Link>

        {/* Search Bar (Desktop) */}
        <div style={{ flex: 1, maxWidth: "400px", position: "relative" }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              width: "100%",
              padding: "0.6rem 3rem 0.6rem 1rem",
              borderRadius: "25px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              background: "rgba(255, 255, 255, 0.1)",
              color: "var(--text-light)",
              outline: "none",
              fontSize: "0.9rem",
              boxSizing: "border-box",
              transition: "all 0.3s ease",
            }}
            onFocus={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.15)";
              e.target.style.borderColor = "var(--accent)";
            }}
            onBlur={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.1)";
              e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
            }}
          />
          {/* Search Icon Button */}
          <button
            onClick={handleSearch}
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
            title="Search"
          >
            <SearchIcon size={20} color="var(--text-light)" />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul
          className="desktop-menu"
          style={{
            display: "flex",
            gap: "2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                style={{
                  color:
                    location.pathname === link.path
                      ? "var(--accent)"
                      : "var(--text-light)",
                  textDecoration: "none",
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/cart"
              style={{ position: "relative", textDecoration: "none" }}
            >
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
            listStyle: "none",
            margin: 0,
          }}
        >
          {/* Search Bar (Mobile) */}
          <li style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{
                width: "100%",
                padding: "0.6rem 3rem 0.6rem 1rem",
                borderRadius: "25px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                background: "rgba(255, 255, 255, 0.1)",
                color: "var(--text-light)",
                outline: "none",
                fontSize: "0.9rem",
                boxSizing: "border-box",
              }}
            />
            {/* Search Icon Button (Mobile) */}
            <button
              onClick={handleSearch}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              title="Search"
            >
              <SearchIcon size={20} color="var(--text-light)" />
            </button>
          </li>

          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                style={{ textDecoration: "none" }}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/cart"
              onClick={() => setIsOpen(false)}
              style={{ textDecoration: "none" }}
            >
              Cart ({cart.reduce((acc, item) => acc + item.qty, 0)})
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
