import React, { useState } from "react";
import "./styles.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import discord from "../../assets/discord.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [state, setstate] = useState(false);
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <div className="nav-links">
        <div className="internal-link">
          <Link activeClass="active" smooth={true} duration={800} to="Home">
            HOME
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="Mint">
            MINT
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="Team">
            TEAM
          </Link>
          <Link activeClass="active" smooth={true} duration={800} to="RoadMap">
            ROADMAP
          </Link>
        </div>
        <AiOutlineMenu onClick={() => setstate(true)} className="menu-icon" />
        <div className={state ? "slide-menu active" : "slide-menu"}>
          <AiOutlineClose
            className="close-icon"
            onClick={() => setstate(false)}
          />
          <Link
            onClick={() => setstate(false)}
            activeClass="active"
            smooth={true}
            duration={800}
            to="Home"
          >
            HOME
          </Link>
          <Link
            onClick={() => setstate(false)}
            activeClass="active"
            smooth={true}
            duration={800}
            to="Mint"
          >
            MINT
          </Link>
          <Link
            onClick={() => setstate(false)}
            activeClass="active"
            smooth={true}
            duration={800}
            to="Team"
          >
            TEAM
          </Link>
          <Link
            onClick={() => setstate(false)}
            activeClass="active"
            smooth={true}
            duration={800}
            to="RoadMap"
          >
            ROADMAP
          </Link>
        </div>
        <div className="external-links">
          <a target="_blank" href="https://twitter.com/MonkeyHeistClub">
            <img src={twitter} alt="" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/monkeyheistclubnft"
          >
            <img src={instagram} alt="" />
          </a>
          <a target="_blank" href="https://discord.com/invite/monkeyheistclub">
            <img src={discord} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
