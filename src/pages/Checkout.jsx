import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve the data passed from the Cart page
  const { cartItems, orderSummary, shippingMethod } = location.state || {};

  // If user refreshes the page and data is lost, send them back to cart
  if (!cartItems || !orderSummary) {
    return (
      <div
        className="container"
        style={{ padding: "3rem 1rem", textAlign: "center" }}
      >
        <h2>No checkout data found.</h2>
        <button onClick={() => navigate("/cart")} className="btn">
          Go back to Cart
        </button>
      </div>
    );
  }

  const handleOpayPayment = () => {
    // In a real app, you would send this data to your backend to generate an Opay payment link.
    // For now, we will just show an alert.
    alert(`Redirecting to Opay to pay ₦${orderSummary.total.toLocaleString()}`);

    // Example of what you would do in production:
    // fetch('http://localhost:5000/api/create-opay-order', { method: 'POST', body: ... })
    //   .then(res => res.json())
    //   .then(data => window.location.href = data.opayPaymentLink);
  };

  return (
    <div className="container" style={{ padding: "3rem 1rem" }}>
      <h2>Checkout</h2>

      <div
        style={{
          background: "#f9f9f9",
          padding: "2rem",
          borderRadius: "8px",
          maxWidth: "500px",
        }}
      >
        <h3>Order Review</h3>
        <p>
          <strong>Items:</strong> {cartItems.length}
        </p>
        <p>
          <strong>Shipping:</strong> {shippingMethod}
        </p>
        <p>
          <strong>Subtotal:</strong> ₦{orderSummary.subtotal.toLocaleString()}
        </p>
        <p>
          <strong>Tax:</strong> ₦{orderSummary.tax.toLocaleString()}
        </p>
        <p>
          <strong>Shipping Fee:</strong> ₦
          {orderSummary.shipping.toLocaleString()}
        </p>
        {orderSummary.discount > 0 && (
          <p style={{ color: "green" }}>
            <strong>Discount:</strong> -₦
            {orderSummary.discount.toLocaleString()}
          </p>
        )}

        <hr />
        <h2 style={{ textAlign: "right" }}>
          Total: ₦{orderSummary.total.toLocaleString()}
        </h2>

        <button
          className="btn"
          style={{ width: "100%", marginTop: "1.5rem", background: "#1a73e8" }}
          onClick={handleOpayPayment}
        >
          Pay with Opay
        </button>
      </div>
    </div>
  );
};

export default Checkout;
