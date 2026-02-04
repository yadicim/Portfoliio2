import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const INITIAL_STATE = { lightMode: true }; 

const themeReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      
      return { lightMode: !state.lightMode }; 
    default:
      return state;
  }
};

export const ThemeProvider = ({children}) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return (
    
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};