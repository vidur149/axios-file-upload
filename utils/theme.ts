import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

// Create a theme instance.
const theme = createMuiTheme(
  {
    typography: {
      fontFamily: "Montserrat, sans-serif"
    },
    palette: {
      primary: {
        main: "rgb(97, 97, 255)"
      },
      secondary: {
        main: "#19857b"
      },
      error: {
        main: red.A400
      },
      background: {
        default: "#fff"
      }
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "font-family": "'Montserrat', sans-serif"
        }
      }
    }
  },
  {
    colors: { bgBlue: "#E9F1FC", bgWhite: "rgba(255, 255, 255, 0.9)" }
  }
);

export default theme;
