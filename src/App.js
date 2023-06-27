import React from "react";
// import AuthComponent from "./auth/Auth";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";
import { configureAmplify } from "./current-config";
import { Auth } from "aws-amplify";

configureAmplify();

console.log(Auth.configure());

const App = () => {
  async function signIn() {
    try {
      const user = await Auth.signIn("mederocc@gmail.com", "Calcifer91!");

      console.log(user);
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  return (
    <div>
      <button onClick={signIn}>Sign in</button>
      <Routes>
        {/* <Route path="/" element={<AuthComponent />} /> */}
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
