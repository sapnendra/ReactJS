import React, { useContext } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import { DataContext } from "./context/Usercontext";

const App = () => {
  const data = useContext(DataContext)
  console.log(data);
  return (
    <div>
      <h1>Name : {data.username}</h1>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
