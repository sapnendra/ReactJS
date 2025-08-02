import React, { useContext } from "react";
import { DataContext } from "../context/Usercontext";

const Header = () => {
  const data = useContext(DataContext);
  return (
    <div>
      <h1>Profession : {data.profession}</h1>
    </div>
  );
};

export default Header;
