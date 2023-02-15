import { createTheme } from "@mui/material";
import { blueGrey, cyan } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: blueGrey[700],
      dark: blueGrey[800],
      light: blueGrey[500],
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
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
