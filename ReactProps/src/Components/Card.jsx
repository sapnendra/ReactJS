import React from "react";
import "../index.css";

const Card = (props) => {
  return (
    <div className="bg-gray-700 w-70 h-90 rounded-2xl flex items-center justify-center">
      <div className="card font-bold text-center">
        <img className="h-30 w-50 rounded-2xl mb-2 object-cover object-top" src={props.photo} alt="" />
        <h1 className="text-3xl font-semibold mb-2">
          {props.name} {props.surname}
        </h1>
        <h1 className="text-l font-semibold text-green-500 mb-2">
          {props.profession}
        </h1>
        <h2 className="text-l text-gray-400">
          {props.city}, Age: {props.age}
        </h2>
        <button className="bg-green-700 rounded-xl text-l m-8 px-4 py-1">
          Add Friend
        </button>
      </div>
    </div>
  );
};

export default Card;
