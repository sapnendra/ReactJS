import React from "react";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(username);
    setUsername("");
  };
  return (
    <div>
      <form
        onSubmit={(event) => {
          submitHandler(event);
        }}
      >
        <input
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          className="rounded-2xl border text-2xl bg-black"
          type="text"
          placeholder="Enter you name"
        />
        <br />
        <button className="text-xl rounded-2xl bg-green-700 font-bold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
