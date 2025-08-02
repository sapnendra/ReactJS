import React from "react";
import Car from "./Car";

const Garage = () => {
  const cars = ["Ford", "BMW", "Audi"];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car, idx) => <Car key={idx} brand={car} />)}
      </ul>
    </>
  );
};

export default Garage;
