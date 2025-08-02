import React, { useState } from "react";

const TextArea = () => {
  const [textarea, setTextarea] = useState(
    ""
  );

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  const alertMessage = () => {
    alert(textarea);
  }

  return (
    <form className="flex flex-col gap-10">
      <textarea
        value={textarea}
        onChange={handleChange}
        placeholder="Enter your address here!"
        className="border-1 px-5 py-2 bg-zinc-700 rounded"
      ></textarea>
      <button onClick={alertMessage} className="bg-green-700 rounded px-4 py-2 font-bold">Click Me</button>
    </form>
  );
};

export default TextArea;
