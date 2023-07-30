import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instragram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <img src={Github} alt="" />
        <img src={Instragram} alt="" />
        <img src={LinkedIn} alt="" />
      </div>
      <div className="logo-f"></div>
    </div>
  );
};
export default Footer;
