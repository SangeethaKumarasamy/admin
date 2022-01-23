import React from "react";
import "./topbar.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
export default function TopBar() {
  return (
    <div className=" topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">SK Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <img
            src="https://www.seekpng.com/png/detail/14-143565_image-freeuse-cartoon-clipart-minions-vector.png"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
