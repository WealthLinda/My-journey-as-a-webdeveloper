import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // New states for API integration
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" }); // Clear previous messages

    try {
      // Send POST request to Django API
      const response = await fetch("http://localhost:8000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Success
        setStatus({ type: "success", message: data.message });
        setFormData({ name: "", email: "", message: "" }); // Clear form
      } else {
        // Handle validation errors from Django
        const errorMsg = Object.values(data).flat().join(" ");
        setStatus({ type: "error", message: `Error: ${errorMsg}` });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Network error. Please check if the backend is running.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          {/* Status Message Display */}
          {status.message && (
            <div
              style={{
                padding: "1rem",
                marginBottom: "1rem",
                borderRadius: "4px",
                background: status.type === "success" ? "#d4edda" : "#f8d7da",
                color: status.type === "success" ? "#155724" : "#721c24",
                border: `1px solid ${status.type === "success" ? "#c3e6cb" : "#f5c6cb"}`,
              }}
            >
              {status.message}
            </div>
          )}

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

          <button
            type="submit"
            className="btn"
            disabled={isSubmitting}
            style={{
              width: "100%",
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? "not-allowed" : "pointer",
            }}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
