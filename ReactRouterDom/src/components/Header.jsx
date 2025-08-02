import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="padding flex items-center justify-between">
        <h2 className="text-2xl font-bold">SAPNENDRA</h2>
        <div className="flex items-center justify-between gap-15 text-lg underline">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/product">Products</Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
