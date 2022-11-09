import React from "react";
import "./css/website.css";

function Menu() {
  return (
    <React.Fragment>
      <a href="#header" className="scrollTop">
        <i className="fas fa-angle-up"></i>
      </a>
      <div className="header" id="header">
        <a href="#overview" className="logo"></a>
        <a href="#">Store</a>
        <a href="#">Mac</a>
        <a href="#">Ipad</a>
        <a href="#">Iphone</a>
        <a href="#">Watch</a>
        <a href="#">AirPods</a>
        <a href="#">Accessories</a>
        <a href="#" className="bag"></a>
      </div>
      <div className="header-menu">
        <div className="header-menu-left">
          <p>AirPods (3rd generation)</p>
        </div>
        <div className="header-menu-right">
          <div className="header-menu-menu">
            <a href="#header">Overview</a>
            <a href="#tech">Tech Specs</a>
            <a href="#">Compare</a>
          </div>
          <div className="header-menu-buy">
            <a className="buy" href="#">
              Buy
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Menu;
