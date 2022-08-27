import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const DisplayModal = (props) => {
  return (
    <Modal
      open={props.open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: 200, sm: 400, md: 600 },
          backgroundColor: "white",
          boxShadow: 24,
          p: 6,
          display: "flex",
          flexDirection: "column",
          gap: { xs: "1rem", sm: "2rem" },
          borderRadius: "5px",
        }}
      >
        <div>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              textTransform: "uppercase",

              fontSize: { xs: "1.1rem", sm: "1.4rem" },
            }}
          >
            Registration Succesful
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              fontSize: { xs: ".9rem", sm: "1.1rem" },
              color: "grey",
              margin: ".5rem auto",
            }}
          >
            Your response has been recorded
          </Typography>
        </div>
        <Button
          variant="outlined"
          sx={{ fontSize: { xs: ".8rem", sm: ".9rem" }, 
          '&:hover':{
            color: 'primary.main'
          } }}
          component={Link}
          to='/'
        >
          HOME
        </Button>
      </Box>
    </Modal>
  );
};

export default DisplayModal;
