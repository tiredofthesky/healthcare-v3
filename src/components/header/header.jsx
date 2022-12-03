import React from "react";
import "./header.scss";
import notif from '../resource/icon/notification.svg';
import circle from '../resource/icon/circle.svg';
export default function Header() {
  return (
    <header className="header-main">
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="alert">
          <img src={notif} alt="" />
        </div>
        <div className="profile">
          <img src={circle} alt="" />
        </div>
    </header>
  );
}


