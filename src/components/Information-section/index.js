import React, { forwardRef } from "react";
import Div from "../Div";
import Span from "../Span";
import {
  Grid,
  Typography,
  Button,
  Container,
  useMediaQuery,
} from "@mui/material";
import styled from "@emotion/styled";
import { useTheme } from "@mui/material/styles";

const Ul = styled("ul")(
  ({ theme }) => `
color: white;
display: flex;
flex-direction: column;
justify-content: center;
fontWeight:300;

@media only screen and (min-width: 1150px){
  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${theme.palette.secondary.main};
    height: 100%;
    width: 3px;
    transform: translateX(-30px)
  }
}


`
);

const Li = styled("li")(({ theme }) => ({
  color: "white",
  fontSize: "1.5rem",
}));

const InformationSection = forwardRef((props, ref) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  theme.typography.h3 = {
    fontSize: "3rem",
    color: "white",
    fontWeight: 300,
    fontFamily: "Poppins",
    [theme.breakpoints.down("md")]: {
      fontSize: "4rem",

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
        <Grid item container md={5} sm={12} justifyContent="center">
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            <Span>{props.titlep1}</Span>
            {props.titlep2}
          </Typography>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: "1rem",
              height: smDown ? "18rem" : "25rem",
            }}
          >
            <img src={props.image} height="100%" />
          </Container>
          <Button
            variant="green"
            sx={{ mb: mdDown ? "4rem" : 0, fontSize: smDown && "1rem" }}
          >
            MORE DETAILS
          </Button>
        </Grid>
        <Grid item container md={7} sm={12}>
          <Ul>
            {props.items.map((item) => (
              <Li key={Math.random()}>
                <Typography
                  variant="h2-left"
                  sx={{
                    color: "white",
                    pt: smDown ? 5 : 7,
                    fontWeight: "300",
                    fontSize: smDown ? "1rem" : "1.5rem",
                    lineHeight: "",
                    p: 1,
                    textAlign: "left",
                  }}
                >
                  {item}
                </Typography>
              </Li>
            ))}
          </Ul>
        </Grid>
      </Grid>
    </Div>
  );
});

export default InformationSection;
