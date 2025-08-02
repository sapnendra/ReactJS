import React, { createContext } from "react";

export const DataContext = createContext();

const userContext = ({ children }) => {
    const userData = {
      username: "Sapnendra Jaiswal",
      profession: "Software Engineer",
      age: 21,
      city: "Bengaluru",
    };

  return (
    <div>
      <DataContext.Provider value={userData}>{children}</DataContext.Provider>
    </div>
  );
};

export default userContext;
