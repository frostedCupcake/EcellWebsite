import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, useState } from "react";
// import { faFacebook } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/E-Cell logo footer.png";

const Footer = forwardRef((props, ref) => {
  return (
    <section className="footer" ref={ref}>
      <div>
        <img className="footer-logo" src={logo} alt="" />
      </div>
      <div>
        <p className="footer-heading">THINK | BUILD | INSPIRE</p>
      </div>
      <div className="social">
        <a href="">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </section>
  );
});

export default Footer;
