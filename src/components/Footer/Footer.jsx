import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
  const navigateToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 0.6,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            ArtEvo is the e-commerce website aimed at providing mobile phones
            and other related equipment at relatable price to the customers
            currently located at Butwal, Rupandehi.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Mahendra Rajmarg, Tamnagar, Butwal, Rupandehi, Lumbini, 32900
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 984 6893 345</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: store@artevo.com</div>
          </div>
        </div>
        <div className="col" onClick={scrollDown}>
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          {/* <span className="text">Home Theatre</span>
          <span className="text">Projectors</span> */}
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text" onClick={navigateToTop}>
            Home
          </span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">
            ARTEVO | STORE 2024 CREATED BY Himal Creation Pvt. Ltd.
          </span>
          <img src={Payment} alt="" />
        </div>
      </div>
    </div>
  );
};
// PREMIUM E-COMMERCE SOLUTIONS.
export default Footer;
