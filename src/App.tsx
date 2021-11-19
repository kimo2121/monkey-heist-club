import React from "react";
import "./App.css";
import Benefits from "./components/Benefits/Benefits";
import CustomizedAccordions from "./components/FAQ/FAQ";
import MintComponent from "./components/MintComponent/MintComponent";
import Navbar from "./components/Navbar/Navbar";
import Roadmap from "./components/Roadmap/Roadmap";
import Team from "./components/Team/Team";
import Welcome from "./components/Welcome/Welcome";
import discord from "./assets/discord.png";
import twitter from "./assets/twitter.png";
import instagram from "./assets/instagram.png";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <MintComponent />
      <Team />
      <Roadmap />
      <Benefits />

      <div className="video">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/OREmrNsRL58"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen={true}
        />
      </div>
      <CustomizedAccordions />
      <div className="footer">
        <a target="_blank" href="https://twitter.com/MonkeyHeistClub">
          <img src={twitter} alt="" />
        </a>
        <a target="_blank" href="https://www.instagram.com/monkeyheistclubnft">
          <img src={instagram} alt="" />
        </a>
        <a target="_blank" href="https://discord.com/invite/monkeyheistclub">
          <img src={discord} alt="" />
        </a>
      </div>
    </div>
  );
}

export default App;
