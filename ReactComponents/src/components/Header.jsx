import React from "react";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <>
      <nav className="padding flex items-center justify-between">
        <h2 className="text-2xl font-bold">SAPNENDRA</h2>
        <NavItem />
      </nav>
    </>
  );
};

export default Header;
