import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/ecell_logo.png";
import LogoFont from "../../assets/Ecell_written_logo.png";

const pages = ["Startup", "Investors", "Registers", "Sponsors", "Contact Us"];

const ResponsiveAppBar = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="absolute"
      style={{ background: "transparent" }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            flexDirection: {
              xs: "row-reverse",
              md: "row",
            },
            justifyContent: "space-between",
          }}
        >
          {/**Logo for bigger displays */}
          <Box
            component="img"
            sx={{
              height: "7rem",
              display: { md: "block", xs: "none" },
              pt: "1rem",
            }}
            alt="Logo"
            src={Logo}
          />
          <Box
            component="img"
            sx={{
              height: "3rem",
              display: { md: "block", xs: "none" },
              pt: "1rem",
              pl: 2,
            }}
            alt="ECELL IIT Hyderabad"
            src={LogoFont}
          />

          {/**Menu for smaller displays */}

          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            {/*This is for mobile menu */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    props.MenuItemClickHandler(page);
                    console.log(page);
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center" sx={{ fontFamily: "Poppins" }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            {/* Hamburger Menu Icon Button */}
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                flexGrow: 1,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            component="img"
            sx={{
              height: "5rem",
              display: { md: "none", xs: "block" },
              pt: "1rem",
            }}
            src={Logo}
          />
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  props.MenuItemClickHandler(page);
                  handleCloseNavMenu();
                }}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "1.1rem",
                  mx: 1,
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
