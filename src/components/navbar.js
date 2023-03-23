import React from "react";
import navbar from "./navbar.module.css";
// import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";

const Navbar = () => {
  return (
    <div className={navbar.navContainer}>
      <div className={navbar.logoStyle}>
        {/* <TerminalRoundedIcon /> */}
        LOGO HERE
      </div>
      <nav className={navbar.navBar}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
        <li>
          <a href="#">Prizes</a>
        </li>
        <li>
          <a href="#">Sponsors</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
      </nav>
      <div>
        <button className={navbar.registerButton}>REGISTER</button>
      </div>
    </div>
  );
};

export default Navbar;
