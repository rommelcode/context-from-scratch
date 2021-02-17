import React, { createContext } from "react";

interface IProps {
  getal?: number;
  name: string;
}

const AppContext = createContext();

export default AppContext;
