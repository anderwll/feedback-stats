import { createTheme } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";

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
      main: blueGrey[500],
      dark: blueGrey[400],
      light: blueGrey[300],
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
