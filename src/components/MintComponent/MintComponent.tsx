import React from "react";
import Mint from "../Mint/Mint";
import "./styles.css";

const MintComponent = () => {
  return (
    <div id="Mint" className="mint-container">
      <h1>MINT YOUR MHC NFT</h1>
      <p>
        You need to connect your MetaMask wallet to mint Monkey Heist Club NFT
      </p>
      <Mint />
    </div>
  );
};

export default MintComponent;
