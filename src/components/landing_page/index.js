import React from "react";
import "./style.css";
import { Grid, Typography, Button } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import { useMediaQuery } from "@mui/material";

import rocket from "../../assets/rocket-full.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Box } from "@mui/system";

/**
 * The use of bootstrap has been replaced with material UI
 *
 */

export default function LandingPpage() {
  const theme = useTheme();
  const matchesxl = useMediaQuery(theme.breakpoints.up("lg"));
  const matchesmd = useMediaQuery(theme.breakpoints.up("sm"));
  const matcheslg = useMediaQuery(theme.breakpoints.up("md"));
  const matchessm = useMediaQuery(theme.breakpoints.down("sm"));

  // for the STARTUP FRONT text
  theme.typography.h1 = {
    fontSize: "7rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "5rem",
      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
      textAlign: "center",
    },
  };

  return (
    <>
      <Grid
        container
        sx={{
          height: "100vh",
          background:
            "radial-gradient(50% 50% at 50% 60%, #181743 0%, #340C64 100%);",
          pt: matcheslg ? 3 : matchesmd ? "6rem" : matchessm && "6rem",
        }}
      >
        <Grid
          item
          xs={12}
          md={8}
          lg={6}
          sx={{
            display: matchesmd && "flex",
            flexDirection: matchesmd && "column",
            justifyContent: matchesmd ? "center" : "flex-start",
            pl: matcheslg ? 9 : 0,
            pt: matcheslg ? 7 : 0,
          }}
        >
          <Box>
            <Typography
              variant="h1"
              sx={{
                position: "relative",
                zIndex: 1,
                color: "white",
                fontWeight: "700",
                fontFamily: "Poppins",
                py: matchessm ? "1rem" : 0,
              }}
            >
              START<span className="up">UP</span> <br />
              FAIR
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="h2"
              sx={{
                position: "relative",
                zIndex: 1,
                fontWeight: 400,
                color: "white",
                fontSize: "1.8rem",
                textAlign: matchesmd ? "left" : "center",
              }}
            >
              IT’S NOT ABOUT IDEAS. <br />
              IT’S ABOUT MAKING IDEAS HAPPEN.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: matcheslg ? "flex-start" : "center",
              mt: matcheslg ? 6 : 3,
            }}
          >
            <Button variant="green" sx={{ fontSize: matchessm && "1rem" }}>
              START
            </Button>
          </Box>
        </Grid>
        <Grid container item xs={12} md={4} lg={6}>
          <Box
            component="img"
            src={rocket}
            sx={{
              zIndex: 0,
              position: "absolute",
              transform: matchessm ? "translateX(50%)" : "translateX(0)",
              right: matchessm ? "50%" : 0,
              bottom: 0,
              filter:
                useMediaQuery(theme.breakpoints.down("md")) &&
                "brightness(75%)",
              height: matchesxl
                ? "60vh"
                : matcheslg
                ? "31.25rem"
                : matchesmd
                ? "21.25rem"
                : matchessm && "16.5rem",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
