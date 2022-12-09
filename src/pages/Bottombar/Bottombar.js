import React from "react";
import { BottomBarBtn, BottomBarContainer } from "./Bottombar.element";

import { IoCalendarClear } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
const Bottombar = () => {
  return (
    <div className="BottomBar">
      <BottomBarContainer>
        <BottomBarBtn onClick={() => (window.location.href = "/")}>
          {/* <GiCastle size="40" /> */}
          <MdHomeFilled size="35" />
          {/* <img src={"/assets/bottom_home.png"} width={"40"} alt="home" /> */}
          {/* dashboard */}
        </BottomBarBtn>
        <BottomBarBtn onClick={() => (window.location.href = "/calendar")}>
          <IoCalendarClear size="30" />
          {/* calendar */}
        </BottomBarBtn>
        <BottomBarBtn onClick={() => (window.location.href = "/map")}>
          <FaMapMarkedAlt size="30" />
          {/* <GiTreasureMap size="40" /> */}
          {/* map */}
        </BottomBarBtn>
      </BottomBarContainer>
    </div>
  );
};

export default Bottombar;
