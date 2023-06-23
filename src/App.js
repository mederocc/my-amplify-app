import React from "react";
import Auth from "./Auth/Auth";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
