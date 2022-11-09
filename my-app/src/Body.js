import React from "react";
import "./css/website.css";
import video1 from "./videos/1.mp4";
import video2 from "./videos/2.mp4";
import video3 from "./videos/3.mp4";
import { useEffect, useRef } from "react";

function Body() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  const videoE2 = useRef(null);

  const attemptPlay2 = () => {
    videoE2 &&
      videoE2.current &&
      videoE2.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  const videoE3 = useRef(null);

  const attemptPlay3 = () => {
    videoE3 &&
      videoE3.current &&
      videoE3.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
    attemptPlay2();
    attemptPlay3();
  }, []);

  return (
    <React.Fragment>
      <div className="new-direction">
        <div className="new-direction-image">
          <p id="new-direction-text" className="new-direction-text"></p>
        </div>
      </div>
      <div className="body-wrapper-1">
        <div className="adaptive-eq">
          <div className="adaptive-eq-image">
            <p
              id="adaptive-eq-image-text"
              className="adaptive-eq-image-text"
            ></p>
          </div>
        </div>
        <div className="adaptive-eq-text wow flipInY" data-wow-duration="1.5s">
          <p className="adaptive-eq-text-big">Bass hits an all-time high.</p>
          <p className="adaptive-eq-text-small">
            An Apple-designed dynamic driver, powered by a custom amplifier,
            renders music in exceptionally detailed sound quality - so you revel
            in every tone, from deep, rich bass to crisp, clean highs.
          </p>
        </div>
      </div>
      <div className="mute-breeze wow fadeInUp" data-wow-duration="1.5s">
        <div className="mute-breeze-left">
          <div className="mute-breeze-left-image"></div>
        </div>
        <div className="mute-breeze-right">
          <p className="mute-breeze-right-big">Mute the breeze.</p>
          <p className="mute-breeze-right-small">
            Covered in a special acoustic mesh, an inset microphone in each
            earbud minimizes wind noise when you're on a call — so your voice is
            always heard loud and clear.
          </p>
        </div>
      </div>
      <div className="body-wrapper-2">
        <div
          className="body-wrapper-2-left wow rotateInDownRight"
          data-wow-duration="1.5s"
        >
          <div className="body-wrapper-2-left-image"></div>
          <div className="body-wrapper-2-left-text">
            <p>
              <span>
                You heard it here first. HD voice quality for FaceTime.
              </span>
              Connect on FaceTime in crisp, HD quality with a new AAC-ELD speech
              codec. And with support for spatial audio, Group FaceTime calls
              sound more true to life than ever.
            </p>
          </div>
        </div>
        <div
          className="body-wrapper-2-right wow swing"
          data-wow-duration="1.5s"
        >
          <div className="body-wrapper-2-right-image">
            <p
              id="body-wrapper-2-right-text"
              className="body-wrapper-2-right-text"
            >
              Style from ear to ear. With a contoured design and shorter stem,
              AirPods are designed to direct sound into your ears — in a refined
              look anyone can appreciate.
            </p>
          </div>
        </div>
      </div>
      <div className="pinch wow bounce" data-wow-duration="1.5s">
        <div className="pinch-left">
          <p className="pinch-left-big">Pinch- perfect control.</p>
          <p className="pinch-left-small">
            The force sensor gives you even more control over your
            entertainment. You can press to play, pause, and skip through songs,
            or answer and end calls.
          </p>
        </div>

        <div className="pinch-right">
          <div className="pinch-right-image"></div>
        </div>
      </div>
      <div className="body-wrapper-3">
        <div className="body-wrapper-3-left wow shake" data-wow-duration="1.5s">
          <div className="body-wrapper-3-left-video">
            <video
              loop
              muted
              controls
              alt="All the devices"
              src={video1}
              ref={videoEl}
            />
          </div>
          <div className="body-wrapper-3-left-text">
            <p>
              Both AirPods and the MagSafe Charging Case are rated IPX4 sweat
              and water resistant, so theyll withstand anything from rain to
              heavy workouts.
            </p>
          </div>
        </div>
        <div
          className="body-wrapper-3-right wow fadeInRightBig"
          data-wow-duration="1.5s"
        >
          <div className="body-wrapper-3-right-text">
            <p>
              <span>A case full of energy.</span>
              Wirelessly and effortlessly recharge the MagSafe Charging Case on
              a MagSafe charger. Fully loaded, the case gives you up to 30 hours
              of total listening time. And charging AirPods in the case for just
              5 minutes generates around an hour of listening time.
            </p>
          </div>
          <div className="body-wrapper-3-right-video">
            <video
              loop
              muted
              controls
              alt="All the devices"
              src={video2}
              ref={videoE2}
            />
          </div>
        </div>
      </div>
      <div className="battery">
        <div className="battery-wrapper">
          <div className="battery-left">
            <div className="battery-up-to">
              <p className="battery-number">6</p>
              <p className="battery-text">
                hours of listening time with one charge.
              </p>
            </div>
          </div>
          <div className="battery-right">
            <div className="battery-up-to">
              <p className="battery-number">30</p>
              <p className="battery-text">
                hours of total listening time with the case.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="connection wow lightSpeedIn" data-wow-duration="1.5s">
        <div className="connection-left">
          <video
            loop
            muted
            controls
            alt="All the devices"
            src={video3}
            ref={videoE3}
          />
        </div>
        <div className="connection-right">
          <p className="connection-right-big">An instant connection.</p>
          <p className="connection-right-small">
            Place AirPods near your iPhone or iPad and tap Connect to pair with
            every device in your iCloud account. If you're playing music on your
            Mac, you’ll be able to answer a call on your iPhone — without having
            to switch devices.
          </p>
        </div>
      </div>
      <div className="sense wow rollIn" data-wow-duration="1.5s">
        <div className="sense-left">
          <p>
            <span>A case full of energy.</span>
            Wirelessly and effortlessly recharge the MagSafe Charging Case on a
            MagSafe charger. Fully loaded, the case gives you up to 30 hours of
            total listening time. And charging AirPods in the case for just 5
            minutes generates around an hour of listening time.
          </p>
        </div>
        <div className="sense-right">
          <div className="sense-right-image"></div>
        </div>
      </div>
      <div
        className="body-wrapper-4 wow fadeInDownBig"
        data-wow-duration="1.5s"
      >
        <div className="body-wrapper-4-left">
          <div className="body-wrapper-4-left-title">
            <span>Hey Siri,</span>
            <br />
            show me tech specs.
          </div>
          <div className="body-wrapper-4-left-text">
            <p>
              <span>Always-on “Hey Siri.”</span>
              Play music, make calls, get directions, or check your schedule
              simply by using your voice. Just say “Hey Siri” to activate your
              favorite personal assistant and stay on top of everyday tasks.
            </p>
          </div>
        </div>
        <div className="body-wrapper-4-right">
          <div className="body-wrapper-4-right-title">
            <span>
              “New announcement from Apple. Please hover to learn more.”
            </span>
          </div>
          <div className="body-wrapper-4-right-text">
            <p>
              <span>Announce Notifications.</span>
              Siri can read your important messages or alerts as they arrive —
              and you can even reply to messages with just your voice.
            </p>
          </div>
        </div>
      </div>
      <div className="find wow rotateInUpRight" data-wow-duration="1.5s">
        <div className="find-left">
          <div className="find-left-image"></div>
        </div>
        <div className="find-right">
          <p>
            <span>Enhanced Find My.</span>
            Track down your AirPods with the Find My app. See how close they are
            with proximity view, get separation alerts if they’re out of
            Bluetooth range — or have them play a sound so you can locate them.
          </p>
        </div>
      </div>
      <div className="sharing">
        <div className="sharing-left">
          <p>
            <span>Audio Sharing.</span>
            Easily share a song or show between any two sets of AirPods. Simply
            bring AirPods near the iPhone, iPad, or Apple TV you’re listening to
            and connect instantly.
          </p>
        </div>
        <div className="sharing-right">
          <div className="sharing-right-image"></div>
        </div>
      </div>{" "}
    </React.Fragment>
  );
}
export default Body;
