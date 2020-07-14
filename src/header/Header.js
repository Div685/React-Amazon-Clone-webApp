import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
          alt="logo"
        />
      </Link>
      <input type="text" className="header__searchInput" value="" />
    </nav>
  );
}

export default Header;
