import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppContext from "./AppContext";

const Kut = (value) => <div>{value}</div>;

function App() {
  const Prov = AppContext.Provider;
  return <Prov value={"shit"}>fuck</Prov>;
}

export default App;
