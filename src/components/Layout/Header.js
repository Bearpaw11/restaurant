import React from "react";
import Modern from "../../assets/modern.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton"

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>The Modest Modern</h1>
        <HeaderCartButton/>
      </header>
      <div className={classes[`main-image`]}>
        <img src={Modern} alt="Modern Restaurant" />
      </div>
    </React.Fragment>
  );
};

export default Header;
