import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { DarkTheme } from "./config/theme/dark";
import { LightTheme } from "./config/theme/ligth";
import GlobalStyle from "./config/global";
import AppRoutes from "./routes";
import { useAppSelector } from "./store/hooks";

function App() {
  const mode = useAppSelector((state) => state.darkMode);

  return (
    <ThemeProvider theme={mode ? DarkTheme : LightTheme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
