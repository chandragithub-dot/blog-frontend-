import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="titlesmall">React & Node</span>
        <span className="titlelarge">Mongodb</span>
      </div>
      <img
        alt=""
        className="titleimg"
        src="https://wallpaperaccess.com/full/284549.jpg"
      />
    </div>
  );
};

export default Header;
