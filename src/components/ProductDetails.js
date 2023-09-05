import React from "react";
import { useParams, Link } from "react-router-dom";
import jsonData from "../components/data.json";
import { FaStar, FaTimes } from "react-icons/fa"; // Import star and close icons

const ProductDetails = () => {
  const { id: productId, category } = useParams();
  const product = jsonData[category].find((item) => item.id === productId);

  return (
    <div style={styles.card}>
      <div style={styles.closeIcon}>
        <Link to="/products" className="link-black"> {/* Link to the product page */}
          <FaTimes />
        </Link>
      </div>
      <div style={styles.leftContainer}>
        <img src={product?.img} alt={product?.title} style={styles.image} />
      </div>
      <div style={styles.rightContainer}>
        <h1 style={styles.heading}>{product?.title}</h1>
        <div style={styles.details}>
          <p style={styles.detail}>Price: {product?.price}</p>
          <p style={styles.detail}>Color: {product?.color}</p>
          <p style={styles.detail}>Size: {product?.size}</p>
          <p style={styles.detail}>Material: {product?.material}</p>
        </div>
        <Link to="/products" style={styles.checkoutLink}> {/* Link to the checkout page */}
          Checkout
        </Link>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: "flex",
    flexDirection: "row", // Change to column layout
    backgroundColor: "white",
    borderRadius: "10px",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    padding: "20px",
    margin: "0 20px",
    marginBottom: "20px",
    background: "linear-gradient(to bottom, #f6f6f6, #e0e0e0)",
  },
  closeIcon: {
    alignSelf: "flex-start",
    color: "black", // Set close icon color to black
  },
  leftContainer: {
    flex: "1",
    padding: "20px",
  },
  rightContainer: {
    flex: "1",
    padding: "2px",
    textAlign: "left", // Align text on the right container to the left
    paddingRight: "50px",
  },
  image: {
    width: "450px",
    maxWidth: "100%",
    height: "500px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "15px",
  },
  details: {
    fontSize: "16px",
  },
  detail: {
    display: "flex",
    alignItems: "center", // Center text vertically with star icon
  },
  checkoutLink: {
    backgroundColor: "black",
    color: "white",
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
    textDecoration: "none", // Remove underlines from link
    display: "inline-block", // Ensure link behaves like a button
    textAlign: "center", // Center the link text
  },
};

export default ProductDetails;
