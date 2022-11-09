import React from "react";
import "./css/website.css";
import Product from "./Product";
import Menu from "./Menu";
import BigBanner from "./BigBanner";
import Footer from "./Footer";
import TechSpecs from "./TechSpecs";
import Body from "./Body";

function Website() {
  return (
    <React.Fragment>
      <Menu />
      <Product />
      <BigBanner />
      <div className="body-wrapper">
        <Body />
      </div>
      <div className="wrapper-body">
        <TechSpecs />
        <Footer />
      </div>
    </React.Fragment>
  );
}
export default Website;
