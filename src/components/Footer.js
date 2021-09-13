import React from "react";
import dark from "./../assets/images/dark.png";
import tiktok from "./../assets/images/tik-tok.svg";
import twitter from "./../assets/images/twitter.svg";
import instagram from "./../assets/images/instagram.svg";
const Footer = () => {
  return (
    <footer className="container">
        <div className="footer">
        <img src={dark} alt="" />
      <div>
        <i className="far fa-envelope"></i>
        <span>admin@loothereum.com</span>
      </div>
      <div>
        <i className="fas fa-map-marker-alt"></i>
        <span>Searching for Loot</span>
      </div>
      {/* <div className="social_links">
        <a className="nav-link" href="/">
          <img src={tiktok} alt="" />
        </a>

        <a className="nav-link" href="/">
          <img src={twitter} alt="" />
        </a>

        <a className="nav-link" href="/">
          <img src={instagram} alt="" />
        </a>
      </div> */}
        </div>
    </footer>
  );
};

export default Footer;
