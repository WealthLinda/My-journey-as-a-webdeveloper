import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const allProducts = [
  {
    id: 1,
    name: "Redpolo",
    price: 45000,
    image: "/src/pages/Redpolo.jpeg",
  },
  {
    id: 2,
    name: "Longsleeve",
    price: 45000,
    image: "/src/pages/Longsleeve.jpeg",
  },
  {
    id: 3,
    name: "Palms",
    price: 75000,
    image: "/src/images/palms.jpeg",
  },

  {
    id: 4,
    name: "Designer polo",
    price: 30000,
    image: "/src/images/polo1.jpeg",
  },

  {
    id: 5,
    name: "Polo",
    price: 35000,
    image: "/src/images/polo2.jpeg",
  },

  {
    id: 6,
    name: "Polo",
    price: 40000,
    image: "/src/images/polo3.jpeg",
  },

  {
    id: 7,
    name: "Shirt",
    price: 55000,
    image: "/src/images/shirt1.jpeg",
  },

  {
    id: 8,
    name: "Singlet",
    price: 25000,
    image: "/src/images/singlet.jpeg",
  },

  {
    id: 9,
    name: "Stripeshirt",
    price: 40000,
    image: "/src/images/stripeshirt.jpeg",
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

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = allProducts.find((p) => p.id === parseInt(id));

  if (!product)
    return (
      <div className="container" style={{ padding: "2rem" }}>
        Product not found
      </div>
    );

  return (
    <div className="container" style={{ padding: "3rem 1rem" }}>
      <Link
        to="/shop"
        style={{
          color: "var(--accent)",
          marginBottom: "1rem",
          display: "inline-block",
        }}
      >
        ← Back to Shop
      </Link>
      <div
        className="grid-2"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{ borderRadius: "8px", width: "100%" }}
        />
        <div>
          <span
            style={{
              background: "#eee",
              padding: "0.3rem 0.8rem",
              borderRadius: "20px",
              fontSize: "0.8rem",
            }}
          >
            {product.category}
          </span>
          <h1 style={{ fontSize: "2.5rem", margin: "1rem 0" }}>
            {product.name}
          </h1>
          <h2 style={{ color: "var(--accent)", marginBottom: "1.5rem" }}>
            ₦{product.price.toLocaleString()}
          </h2>
          <p style={{ marginBottom: "2rem", color: "#555" }}>
            Crafted with premium fabrics sourced locally and internationally.
            Perfect for weddings, corporate events, or casual outings in Abuja
            and beyond. Tailored for the modern man.
          </p>
          <button className="btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
