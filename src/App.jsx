import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";

function App() {
  return (
    <>
      <div>
        <h1 className="text-red-700">Welcome to cake shop</h1>
        <CakeContainer />
      </div>
    </>
  );
}

export default App;
