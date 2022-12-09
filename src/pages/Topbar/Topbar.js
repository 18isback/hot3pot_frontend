import React from "react";
import { TopbarContainer } from "./Topbar.element";

const Topbar = () => {
  return (
    <div className="Topbar">
      <TopbarContainer>
        <img
          src={"/assets/instagram.png"}
          alt="insta_logo"
          width="100"
          height="50"
        />
        <img
          src={"/assets/hot3pot_trans.png"}
          alt="hot3pot_logo"
          width="50"
          height="50"
        />
      </TopbarContainer>
    </div>
  );
};

export default Topbar;
