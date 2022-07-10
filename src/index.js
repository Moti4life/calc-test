import React from "react";
import ReactDOM from "react-dom/client";
import Calculator from "./components/Calculator";
import { createContext } from "react";
import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

export const UserNameContext = createContext()
root.render(
  <React.StrictMode>
    <UserNameContext.Provider value={"Moti"}>
      <Calculator />
    </UserNameContext.Provider>
  </React.StrictMode>
);
