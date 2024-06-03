import React from "react";
import "./ProfileSection.css";
import neww from "./images/mam.png"; // Adjust the path according to your directory structure

const ProfileSection = () => {
  return (
    <section className="elementor-section">
      <div className="elementor-column">
        <div className="elementor-widget-container">
          <div className="speak-to-us">
            <div className="left-section">
              <div className="profile-img">
                <img
                  alt="Shraddha Agarwal"
                  src={neww} // Using the imported image
                />
              </div>
              <div className="profile-name">
                <span>Shraddha Agarwal- Founder Izzki</span>
              </div>
            </div>
            <div className="right-section">
              <div className="content-title">Hi there!</div>
              <p>
                I help clients accelerate their digital growth through software
                engineering and digital product development.
                <br />I also act as an advisor to help guide technology
                decisions and assess digital growth.
              </p>

              <p>Let us team up and build something awesome!</p>
              <br />
              <div>
                <a href="#contactus" className="custom-btn">
                  GET IN TOUCH
                  <i className="fa fa-long-arrow-down"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
