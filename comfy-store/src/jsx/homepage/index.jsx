import React, { useEffect, useState } from "react";
import Button from "../../components/buttons";
import "./index.css";
import { Link } from "react-router-dom";
import Card from "../../components/card";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://strapi-store-server.onrender.com/api/products?featured=true"
        );
        const result = await response.json();
        console.log("API Response:", result);
        if (result.data && result.data.length > 0) {
          setData(result.data);
          console.log(result.data);
        } else {
          console.warn("No product data found.");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="hero-section">
        <div className="hero-top">
          <div className="container">
            <div className="hero-info">
              <h1 className="hero-info_title">
                We are changing the way people shop
              </h1>

              <p className="hero-info_par">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                error perferendis, eius atque aperiam corrupti praesentium.
                Omnis ullam sequi eum?
              </p>

              <Link to="/products">
                <Button title="OUR PRODUCTS" buttonClass="product-btn" />
              </Link>
            </div>
            <div className="hero-carousel">
              <img src="https://5.imimg.com/data5/SELLER/Default/2023/7/326882125/MI/XJ/JO/24135102/sectional-sofa-set-500x500.jpg" alt="pic" />
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="container">
            <h2 className="featured-info">Featured Products</h2>
            <hr />
            <div className="cards">
              {/* {result.data.map((item)=>(
                <div key={item.id}>
                  <h3>{item.title}</h3>
                </div>
              ))
              
              } */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
