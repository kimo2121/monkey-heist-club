import React from "react";
import "./styles.css";
import benefits21 from "../../assets/benefits21.png";
const Benefits = () => {
  return (
    <div className="benfits">
      <img src={benefits21} alt="" />
      <div className="holders">
        <h2>MHC Holders Benefits</h2>
        <h3>
          Became MonkeyHeistClub member and enjoy crazy benefits! <br />
          <br />
          Play2Earn game, exclusive comic dropped to MHC holders, staking
          tokens, community wallet and much much more
        </h3>
      </div>
    </div>
  );
};

export default Benefits;
