import React from "react";
import header from "./header.module.css";
import hero from "./hero.svg";

const Header = () => {
  return (
    <header class={header.headerSpace}>
      <div>
        <img
          className={header.heroImage}
          src={hero}
          alt="Hackathon Hero Image"
        />
      </div>
    </header>
  );
};

export default Header;
