import React from "react";
import "./css/website.css";

function TechSpecs() {
  return (
    <React.Fragment>
      <div className="ar">
        <div className="ar-left wow tada" data-wow-duration="1.5s">
          <p className="ar-left-big">Use AR to see the new AirPods.</p>
          <p className="ar-left-small">
            Open this page using Safari on your iPhone or iPad.
          </p>
        </div>
        <div className="ar-right">
          <div className="ar-right-image"></div>
        </div>
      </div>
      <div className="discover">
        <div className="discover-left wow swing" data-wow-duration="1.5s">
          <p className="discover-left-big">Say it in a way only you can.</p>
          <p className="discover-left-small">
            Discover new engraving options for AirPods. Mix emoji, text, and
            numbers.
          </p>
          <p className="discover-left-buy">Buy AirPods</p>
        </div>
        <div className="discover-right">
          <div className="discover-right-image"></div>
        </div>
      </div>
      <div className="music">
        <div className="music-left wow bounceInLeft" data-wow-duration="1.5s">
          <p className="music-left-big">
            Get 6 months of Apple Music free with your AirPods.
          </p>
          <p className="music-left-learn">Learn more </p>
        </div>
        <div className="music-right">
          <div className="music-right-image"></div>
        </div>
      </div>
      <div className="tech" id="tech">
        <div className="tech-left">
          <div className="tech-left-1">
            <div className="tech-left-1-image"></div>
            <p className="tech-left-1-big">Connection</p>
            <p className="tech-left-1-small">Bluetooth 5.0</p>
          </div>
          <div className="tech-left-2">
            <div className="tech-left-2-image"></div>
            <p className="tech-left-2-big">Battery</p>
            <p className="tech-left-2-small">Duration 30h</p>
          </div>
          <div className="tech-left-3">
            <div className="tech-left-3-image"></div>
            <p className="tech-left-3-big">Water Resistant</p>
            <p className="tech-left-3-small">IPX4</p>
          </div>
          <div className="tech-left-4">
            <div className="tech-left-4-image"></div>
            <p className="tech-left-4-big">Charging Case</p>
            <p className="tech-left-4-small">Magsafe charger</p>
          </div>
        </div>
        <div className="tech-right">
          <div className="tech-right-image"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default TechSpecs;
