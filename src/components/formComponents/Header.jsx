import { Paper, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <>
      <Paper
        sx={{
          width: "100%",
          margin: "1rem auto 0 ",
          borderRadius: "10px",
          color: "#340C64",
          border: "2px solid #340C64",
          display: "flex",
          gap: "1rem",
          flexDirection: "column",
          padding: "2.5rem 2rem",
        }}
        elevation={1}
      >
        <Typography
          variant="h4"
          sx={{
            textTransform: "uppercase",
            marginTop: "1rem",
            fontSize: { xs: "1.5rem", sm: "2rem" },
          }}
        >
          IIT Hyderabad E-Cell Summit 2022
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: ".9rem", sm: "1.2rem" },
            marginBottom: "1rem",
          }}
        >
          Please fill this registration form
        </Typography>
      </Paper>
    </>
  );
};

export default Header;
