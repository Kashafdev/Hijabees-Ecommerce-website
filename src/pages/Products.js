import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import ProductCard from "../components/ProductCard"; 
import jsonData from "../components/data.json"; 
import "../components/Styles/slider.css";
import ProductSection from "../components/ProductSection";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("HijabCollection");
  const { id } = useParams();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const getProductDataByCategory = () => {
    return jsonData[selectedCategory];
  };

  const productData = getProductDataByCategory();
  const selectedProduct = productData.find((product) => product.id === id);
 


  return (
    <div>
      <Header />
      <Navbar />
      <ProductSection />
      <div className="d-flex row">
        <div className="col-md-3 col-12 sidebar">
          <button
            className={selectedCategory === "AbayaCollection" ? "active" : ""}
            onClick={() => handleCategoryChange("AbayaCollection")}
          >
            Abaya's
          </button>
          <button
            className={selectedCategory === "HijabCollection" ? "active" : ""}
            onClick={() => handleCategoryChange("HijabCollection")}
          >
            Hijab
          </button>
          <button
            className={selectedCategory === "ChadarCollection" ? "active" : ""}
            onClick={() => handleCategoryChange("ChadarCollection")}
          >
            Chadar
          </button>
          <button
            className={selectedCategory === "HijabCapCollection" ? "active" : ""}
            onClick={() => handleCategoryChange("HijabCapCollection")}
          >
            HijabCaps
          </button>
        </div>
        <div className="col-md-9 col-12">
          <div className="product-card-container">
            {productData.map((product) => (
              <ProductCard key={product.id} product={product}  category={selectedCategory} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Products;
