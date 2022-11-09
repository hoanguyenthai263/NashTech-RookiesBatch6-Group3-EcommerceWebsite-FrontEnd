import React from "react";
import "./css/website.css";

function BigBanner() {
  return (
    <React.Fragment>
      <div className="spatial">
        <div
          className="spatial-text wow fadeInLeftBig"
          data-wow-duration="1.5s"
        >
          <p>It's magic, remastered.</p>
          <p>With spatial audio that places</p>
          <p>sound all around you, Adaptive EQ</p>
          <p>that tunes music to your ears,</p>
        </div>
      </div>
      <div className="magsafe">
        <div className="magsafe-text wow bounceInDown" data-wow-duration="1.5s">
          <p>and longer battery life</p>
          <p>that charges up in a snap</p>
        </div>
      </div>
      <div className="water">
        <div className="water-text wow bounceInUp" data-wow-duration="1.5s">
          <p>It shrugs off sweat and</p>
          <p>sprinkles, and delivers an</p>
          <p>experience that's</p>
          <p>simply magical.</p>
        </div>
      </div>
    </React.Fragment>
  );
}
export default BigBanner;
