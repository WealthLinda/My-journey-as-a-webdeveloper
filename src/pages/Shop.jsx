import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

// Use 127.0.0.1 to match your Django setup exactly
const API_URL = "http://127.0.0.1:8000/api/products/";
const MEDIA_URL = "http://127.0.0.1:8000";

const Shop = () => {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        // --- THE FIX IS HERE ---
        // If Django has pagination, the array is inside 'data.results'.
        // Otherwise, 'data' is already the array.
        const productList = Array.isArray(data) ? data : data.results || [];

        setProducts(productList);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError("Failed to load products. Is the Django server running?");
        setLoading(false);
      });
  }, []);

  if (loading)
    return <div style={{ padding: "2rem" }}>Loading products...</div>;
  if (error)
    return <div style={{ padding: "2rem", color: "red" }}>{error}</div>;

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
        {/* Added Array.isArray check just to be 100% safe from crashing */}
        {Array.isArray(products) &&
          products.map((product) => (
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
                  // Added a fallback placeholder image just in case an image fails to upload

                  // If the image URL already starts with 'http', use it. Otherwise, add MEDIA_URL.
                  src={
                    product.image?.startsWith("http")
                      ? product.image
                      : `${MEDIA_URL}${product.image}`
                  }
                  alt={product.name}
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                  // Fallback image just in case the file is missing or broken
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300";
                  }}
                />
              </Link>
              <div style={{ padding: "1rem" }}>
                <h4>{product.name}</h4>
                <p style={{ color: "#666", fontSize: "0.9rem" }}>
                  {product.category}
                </p>
                <p style={{ fontWeight: "bold", margin: "0.5rem 0" }}>
                  ₦{Number(product.price).toLocaleString()}
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
