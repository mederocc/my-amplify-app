import React from "react";
import AuthComponent from "./auth/Auth";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AuthComponent />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
