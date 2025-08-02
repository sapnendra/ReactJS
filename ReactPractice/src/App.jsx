import React from "react";
import TextArea from "./components/TextArea";
import DropDown from "./components/DropDown";

const App = () => {
  return (
    <div className="h-[100vh] bg-[#222] text-[#fff] flex flex-col items-center justify-center">
      <DropDown />
    </div>
  );
};

export default App;
