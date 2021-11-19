import React from "react";
import Member from "./Member";
import "./styles.css";
import smith from "../../assets/img2.png";
import hotshot from "../../assets/img3.png";
import relag from "../../assets/PFP.png";

const SMITH = [
  "Community Manager",
  "Discord Manager",
  "Collab Pro",
  "Proud Dad",
];

const HOTSHOT = [
  "Marketing",
  "Team Manager",
  "Analytics",
  "Social Media Management",
];

const REALG = [
  "Development",
  "Problem Solving",
  "Decision Making",
  "Negotiation",
];

const Team = () => {
  return (
    <div className="team">
      <h1>THE POWER OF OUR TEAM</h1>
      <div className="members">
        <Member name="SMITH" img={smith} data={SMITH} />
        <Member name="HOTSHOT" img={hotshot} data={HOTSHOT} />
        <Member name="REALG" img={relag} data={REALG} />
      </div>
    </div>
  );
};

export default Team;
