import React from "react";
import "./css/website.css";
import img1 from "./images/airpods_left.png";
import img2 from "./images/airpods_right.png";
import { useState, useEffect } from "react";
import ProductService from "./ProductService";

function Product() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProductService.getProductById(
          "4a9a7a5d-e4e9-47c1-ba63-71c548c89fb9"
        );
        console.log(response);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="body-1" id="overview">
        <img alt="" src={img1} />
        <div className="body-1-text wow tada" data-wow-duration="1.5s">
          <p className="body-1-text-big">AirPods</p>
          <p className="body-1-text-small">All-new with Spatial Audio</p>
          <div className="body-1-text-buy">
            <a href="#" className="bag"></a>
            <p>Add to Bag</p>
            <p className="price">$179</p>
          </div>
        </div>
        <img alt="" src={img2} />
      </div>
    </React.Fragment>
  );
}
export default Product;
