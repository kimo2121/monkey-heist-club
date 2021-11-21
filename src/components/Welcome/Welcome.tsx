import React from "react";
import "./styles.css";
import img3 from "../../assets/img3.png";
import { Link } from "react-scroll";

const Welcome = () => {
  return (
    <div className="welcome">
      <img src={img3} alt="" />
      <div className="welcome-text">
        <div>
          <h2>
            Story of 5555 animated monkeys that became world-famous thieves.
            Comic + Play to Earn Game for Holders
          </h2>
          <p>Launching 21. November 7PM EST</p>
          <span>Every monkey is animated :)</span>
        </div>
        <Link smooth={true} duration={800} to="Mint" className="welcome-btn">
          Mint
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
