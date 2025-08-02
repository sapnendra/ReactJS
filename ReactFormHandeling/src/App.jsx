import React from "react";
import Garage from "./components/Garage";
import MyForm from "./components/MyForm";

const App = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center flex-col gap-5 bg-[#222] text-[#fff]">
      <MyForm />
    </div>
  );
};

export default App;
