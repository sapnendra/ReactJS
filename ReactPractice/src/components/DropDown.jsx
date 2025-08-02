import React, { useState } from "react";

const DropDown = () => {
  const [myCar, setMyCar] = useState("Ford");

  const handleChange = (event) => {
    setMyCar(event.target.value);
    console.log(event.target.value);
  };

  return (
    <form className="border-1 w-40 text-black bg-white rounded px-5 py-2">
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  );
};

export default DropDown;
