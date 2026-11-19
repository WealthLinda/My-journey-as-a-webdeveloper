// src/components/Cart.js
import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const [calculations, setCalculations] = useState({
    subtotal: 0,
    tax: 0,
    shipping: 0,
    discount: 0,
    total: 0,
  });
  const [discountCode, setDiscountCode] = useState("");
  const [appliedCode, setAppliedCode] = useState("");
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (cart.length === 0) {
      setCalculations({
        subtotal: 0,
        tax: 0,
        shipping: 0,
        discount: 0,
        total: 0,
      });
      return;
    }

    const fetchCalculations = async () => {
      setLoading(true);
      setError("");
      try {
        // UPDATED: Mapped to the exact field names Django expects
        const payload = {
          items: cart.map((item) => ({
            product_id: item.id,
            quantity: item.qty || 1,
          })),
          shipping_method: shippingMethod,
          discount_code: appliedCode,
        };

        const response = await fetch(
          "http://127.0.0.1:8000/api/cart/calculate/", // Added trailing slash
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          },
        );

        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.error || "Failed to calculate cart");
        }

        const data = await response.json();

        // UPDATED: Force all values to be Numbers so .toLocaleString() works perfectly
        setCalculations({
          subtotal: Number(data.subtotal) || 0,
          tax: Number(data.tax) || 0,
          shipping: Number(data.shipping) || 0,
          discount: Number(data.discount) || 0,
          total: Number(data.total) || 0,
        });
      } catch (err) {
        console.error("Cart calculation error:", err);
        setError("Error calculating totals. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCalculations();
  }, [cart, appliedCode, shippingMethod]);

  const handleApplyDiscount = () => {
    setAppliedCode(discountCode);
  };

  const handleCheckout = () => {
    if (loading) return;

    navigate("/checkout", {
      state: {
        cartItems: cart,
        orderSummary: calculations,
        shippingMethod: shippingMethod,
        appliedDiscount: appliedCode,
      },
    });
  };

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
        <div>
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
                // UPDATED: Fixed the image URL so it actually shows up in the cart!
                src={
                  item.image?.startsWith("http")
                    ? item.image
                    : `http://127.0.0.1:8000${item.image}`
                }
                alt={item.name}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "4px",
                }}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/80";
                }}
              />
              <div style={{ flex: 1 }}>
                <h4>{item.name}</h4>
                <p>
                  {/* UPDATED: Wrapped in Number() to prevent string formatting errors */}
                  ₦{Number(item.price).toLocaleString()} x {item.qty}
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
        <div
          style={{
            background: "#fff",
            padding: "1.5rem",
            borderRadius: "8px",
            border: "1px solid #eee",
            height: "fit-content",
          }}
        >
          <h3>Order Summary</h3>

          {/* Shipping Method Selector */}
          <div style={{ marginBottom: "1rem" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Shipping:
            </label>
            <select
              value={shippingMethod}
              onChange={(e) => setShippingMethod(e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            >
              <option value="standard">Standard (₦2,000)</option>
              <option value="express">Express (₦5,000)</option>
            </select>
            {calculations.subtotal >= 50000 && (
              <p
                style={{
                  color: "green",
                  fontSize: "0.8rem",
                  margin: "0.5rem 0 0",
                }}
              >
                🎉 You qualify for FREE shipping!
              </p>
            )}
          </div>

          {/* Discount Code Input */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label
              style={{
                display: "block",
                marginBottom: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Discount Code:
            </label>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="text"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                placeholder="Try SAVE10 or SAVE20"
                style={{
                  flex: 1,
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
              <button
                onClick={handleApplyDiscount}
                style={{
                  padding: "0.5rem 1rem",
                  background: "#333",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Apply
              </button>
            </div>
            {error && (
              <p style={{ color: "red", fontSize: "0.8rem" }}>{error}</p>
            )}
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #eee",
              margin: "1rem 0",
            }}
          />

          {/* Calculations Display */}
          {loading ? (
            <p>Calculating...</p>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0.5rem 0",
                }}
              >
                <span>Subtotal</span>
                <span>₦{calculations.subtotal.toLocaleString()}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0.5rem 0",
                }}
              >
                <span>Shipping</span>
                <span>
                  {calculations.shipping === 0
                    ? "FREE"
                    : `₦${calculations.shipping.toLocaleString()}`}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "0.5rem 0",
                }}
              >
                <span>Tax (7.5% VAT)</span>
                <span>₦{calculations.tax.toLocaleString()}</span>
              </div>
              {calculations.discount > 0 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "0.5rem 0",
                    color: "green",
                  }}
                >
                  <span>Discount ({appliedCode})</span>
                  <span>-₦{calculations.discount.toLocaleString()}</span>
                </div>
              )}

              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid #eee",
                  margin: "1rem 0",
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                }}
              >
                <span>Total</span>
                <span>₦{calculations.total.toLocaleString()}</span>
              </div>
            </>
          )}

          <button
            className="btn"
            style={{
              width: "100%",
              marginTop: "1.5rem",
              opacity: loading ? 0.6 : 1,
              cursor: loading ? "not-allowed" : "pointer",
            }}
            onClick={handleCheckout}
            disabled={loading || cart.length === 0}
          >
            {loading ? "Calculating..." : "Proceed to Checkout (Opay)"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
