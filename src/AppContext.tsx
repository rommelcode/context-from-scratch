import React, { createContext } from 'react';

interface IProps{
    getal?: number;
    name:string;
 
}

const AppContext = createContext(1);

export default AppContext; 

