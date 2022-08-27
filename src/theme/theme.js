import { createTheme, touchRippleClasses } from "@mui/material";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({});

const theme = createTheme({
  palette: {
    primary: {
      main: "#2D0F5B",
    },
    secondary: {
      main: "#13EEAC",
    },
  },
  typography: {
    fontFamily: ["Poppins", "Raleway", "Montserrat"].join(","),
    h2: {
      color: "white",
      fontFamily: "Poppins",
      [breakpoints.down("md")]: {
        textAlign: "center",
      },
      [breakpoints.down("sm")]: {
        fontSize: "1rem",
        textAlign: "center",
      },
    },
    h1: {
      fontFamily: "Poppins",
    },
    variants: [
      {
        props: { variant: "h2left" },
        style: {
          color: "white",
          textAlign: "center",
          color: "white",
          fontFamily: "Poppins",

          [breakpoints.down("md")]: {
            textAlign: "left",
          },
          [breakpoints.down("sm")]: {
            fontSize: "1rem",
            textAlign: "left",
          },
        },
      },
    ],
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "green" },
          style: {
            textTransform: "uppercase",
            backgroundColor: "#13EEAC",
            color: "#2D0F5B",
            padding: "0.4rem 1rem",
            fontWeight: "500",
            fontSize: "1.4rem",
            borderRadius: "10px",
            position: "relative",
            zIndex: 1,
            "&:hover": {
              backgroundColor: "#00d37b",
            },
          },
        },
        {
          props: { variant: "purple" },
          style: {
            textTransform: "uppercase",
            backgroundColor: "#2D0F5B",
            color: "white",
            padding: "0.6rem 1.2rem",
            fontWeight: "500",
            fontSize: "1.6rem",
            borderRadius: "8px",
            position: "relative",
            zIndex: 1,
            "&:hover": {
              backgroundColor: "#2D0F5B",
            },
          },
        },
      ],
    },
  },
});

export default theme;
