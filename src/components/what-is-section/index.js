import React from "react";
import { Typography, Grid, Container } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import Div from "../Div";
import Span from "../Span";
import { forwardRef } from "react";
import questionMark from "../../assets/ques.png";
import arrow from "../../assets/Arrow.png";

const WhatIsSection = forwardRef((props, ref) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));

  theme.typography.h1 = {
    fontSize: "6rem",
    fontFamily: "Poppins",
    fontWeight: 600,
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
    <Div ref={ref}>
      <Grid container>
        <Grid
          item
          container
          sm={12}
          md={8}
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h1" sx={{ color: "white" }}>
            What is<br></br>
            <Span> STARTUP fair?</Span>
          </Typography>
        </Grid>
        <Grid
          container
          item
          sm={12}
          md={4}
          sx={{
            maxHeight: smDown ? "12rem" : "24rem",
            justifyContent: "center",
          }}
        >
          <img src={questionMark} height="100%" />
        </Grid>
      </Grid>
      <Container
        sx={{
          height: smDown ? "2rem" : "3rem",
          mt: smDown ? "3rem" : "4rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={arrow} height="100%" />
      </Container>
      <Container>
        <Typography
          variant="h2"
          sx={{
            color: "white",
            pt: smDown ? 5 : 7,
            fontWeight: "300",
            fontSize: smDown ? "1rem" : "1.5rem",
            textAlign: "left",
          }}
        >
          Entrepreneurship Cell, IIT Hyderabad is here with another marvelous
          initiative to bridge the gap between the booming startups across our
          country and the investors seeking to invest, help and mentor these
          startups to pave their journey better and help them become the
          upcoming unicorns sooner. <br />
          <br />
          We plan to provide the startups and the investors a common platform,
          which is called “The Start-up Fair”, where the startups can pitch
          their ideas/ companies to the investors and at the same time investors
          can invest, collaborate and provide consulting services etc. to these
          startups.
        </Typography>
      </Container>
    </Div>
  );
});

export default WhatIsSection;
