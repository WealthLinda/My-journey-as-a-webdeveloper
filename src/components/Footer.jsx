const Footer = () => (
  <footer
    style={{
      background: "var(--primary)",
      color: "var(--text-light)",
      padding: "2rem 0",
      marginTop: "3rem",
      textAlign: "center",
    }}
  >
    <div className="container">
      <h3 style={{ color: "var(--accent)" }}>JAYLINKUP STORE</h3>
      <p>
        Shop FF9 @LosAngelesMall, Mabuchi,Abuja. Block B17 shop 3 Wuse
        Market,Abuja.
      </p>
      <p>
        &copy; {new Date().getFullYear()} JayLinkUp Store. All rights reserved.
      </p>
    </div>
  </footer>
);
export default Footer;
