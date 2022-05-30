import React from "react";
import App from "../App";
import { useState, createContext } from "react";
interface stateinterface {
  dark: "string";
}

const AppContext = createContext<{
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}>({ dark: false, setDark: () => {} });

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const MainApp = () => {
  const [dark, setDark] = useState<boolean>(false);

  interface theme {
    palette: {
      status: "dark";
    };
  }

  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <AppContext.Provider value={{ dark, setDark }}>
          <App />
        </AppContext.Provider>
      </Paper>
    </ThemeProvider>
  );
};

export default MainApp;
export { AppContext };
