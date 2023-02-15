import { createTheme } from "@mui/material";
import { cyan, grey } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: grey[400],
      dark: grey[400],
      light: grey[500],
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#202124",
      paper: "#303134",
    },
  },
  typography: {
    allVariants: {
      color: "white",
    },
  },
});
