import { createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: blueGrey[700],
      dark: blueGrey[800],
      light: blueGrey[500],
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: blueGrey[500],
      dark: blueGrey[400],
      light: blueGrey[300],
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#f6abb8",
      paper: "#ffff",
    },
  },
  typography: {
    allVariants: {
      color: "black",
    },
  },
});
