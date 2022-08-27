import React from "react";
import bg from "../../assets/bg_try1.jpg";
import { Grid, Typography, Button, Box } from "@mui/material";
import SendIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/material/styles";
import Rocket from "../../assets/shuttle-icon.svg";
import Investor from "../../assets/investor-icon.png";
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

const BgContainer = styled("section")(
  ({ theme }) => `
  position: relative;
  overflow: hidden;
  background: url(${bg});
  background-attachment: fixed;
  background-size: cover;
`
);

const Span = styled("span")`
  color: white;
`;

const IconButton = (props) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Button
        // href={props.link}
        onClick={() => {
          navigate(props.link);
        }}
        variant="purple"
        sx={{
          mt: { md: 6, sm: 5, xs: 2 },
          mb: props.bottomMargin ? { sm: 10, xs: 4 } : 0,
          gap: "10px",
          fontSize: { md: "1.6rem", sm: "1.3rem", xs: "0.7rem" },
        }}
      >
        {props.text}
        <Box
          component="img"
          src={props.icon}
          sx={{ width: { md: "2rem", xs: "1.5rem" } }}
        />
      </Button>
    </Box>
  );
};

const TakePart = forwardRef((props, ref) => {
  const navigate = useNavigate();
  return (
    <BgContainer ref={ref}>
      <Grid container>
        <Grid
          item
          container
          xs={12}
          md={7}
          sx={{ p: { md: "3rem", xs: "1rem" } }}
        >
          <Typography
            variant="h2left"
            sx={{
              fontFamily: "Poppins",
              fontSize: { md: "4rem", sm: "3rem", xs: "1.3rem" },
              color: "black",
              fontWeight: 600,
              pt: { md: 6, xs: 6 },
              pl: { md: 6, xs: 6 },
              pr: { md: 0, xs: 6 },
              pb: { md: 0, xs: 3 },
            }}
          >
            BECOME PART OF THE <Span>STARTUP FAIR!</Span>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Button
              variant="text"
              endIcon={<SendIcon />}
              sx={{
                color: "black",
                fontSize: { md: "2.3rem", sm: "2rem", xs: "1.2rem" },
                borderRadius: 3,
                px: { md: 3 },
                my: { md: 4 },
              }}
            >
              Register
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={5}
          flexDirection="column"
          justifyContent={"center"}
          alignItems="center"
        >
          <IconButton text="start-up" link={"/start-up-form"} icon={Rocket} />
          <IconButton
            text="Investor"
            link={"/VC-form"}
            icon={Investor}
            bottomMargin={true}
          />
        </Grid>
      </Grid>
    </BgContainer>
  );
});

export default TakePart;
