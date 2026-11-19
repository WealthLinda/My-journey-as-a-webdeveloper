import { Link } from "react-router-dom";
import polo1 from "/src/images/palms.jpeg";
import Redpolo from "/src/pages/Redpolo.jpeg";
import palms from "/src/images/palms.jpeg";
import sleeve from "/src/pages/Redpolo.jpeg";

const featuredProducts = [
  {
    id: 2,
    name: "Longsleeve",
    price: 45000,
    image: "/src/pages/Longsleeve.jpeg",
  },

  {
    id: 6,
    name: "Polo",
    price: 40000,
    image: "/src/images/polo3.jpeg",
  },

  {
    id: 10,
    name: "Croptop",
    price: 45000,
    image: "/src/images/crop1.jpeg",
  },

  {
    id: 11,
    name: "Black denim",
    price: 65000,
    image: "/src/images/denim2.jpeg",
  },

  /*Same array as Shop.jsx */
]; // In a real app, fetch from API or context

const Home = () => (
  <div>
    {/* Hero Section */}
    <section
      style={{
        backgroundColor: "grey",
        backgroundSize: "cover",
        color: "white",
        textAlign: "center",
        padding: "6rem 1rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        Elevate Your Style
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        New day, New look.
      </p>
      <Link to="/shop" className="btn">
        Shop Collection
      </Link>
    </section>

    {/* Featured Section */}
    <section className="container" style={{ padding: "4rem 1rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Featured Picks
      </h2>
      <div
        className="grid-2"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "2rem",
        }}
      >
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              transition: "transform 0.3s",
            }}
            className="product-card"
          >
            <img src={product.image} alt={product.name} />
            <div style={{ padding: "1rem" }}>
              <h3>{product.name}</h3>
              <p style={{ color: "var(--accent)", fontWeight: "bold" }}>
                ₦{product.price.toLocaleString()}
              </p>
              <Link
                to={`/product/${product.id}`}
                className="btn"
                style={{
                  marginTop: "1rem",
                  width: "100%",
                  textAlign: "center",
                  borderRadius: "8px",
                }}
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);
export default Home;
