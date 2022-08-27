import styled from "@emotion/styled";
import { useMediaQuery } from "@mui/material";

const Div = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  padding: useMediaQuery(theme.breakpoints.down("sm"))
    ? theme.spacing(4)
    : theme.spacing(8),
}));

export default Div;
