import React, { useState } from "react";

const MyForm = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    alert(`You entered:\nName: ${inputs.username || ""}\nAge: ${inputs.age || ""}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <label>
        Enter your name:
        <input
          type="text"
          name="username"
          placeholder="Enter name"
          value={inputs.username || ""}
          onChange={handleChange}
          className="border-1 px-3 py-1 rounded ml-5"
        />
      </label>
      <label>
        Enter your age:
        <input
          type="text"
          name="age"
          placeholder="Enter age"
          value={inputs.age || ""}
          onChange={handleChange}
          className="border-1 px-3 py-1 rounded ml-5"
        />
      </label>
      <input type="submit" className="py-2 bg-green-700 border-none rounded"/>
    </form>
  );
};

export default MyForm;
