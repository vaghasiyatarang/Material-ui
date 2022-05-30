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
import Switch from "@mui/material/Switch";

import { Link } from "react-router-dom";
import { AppContext } from "../darkMode/MainApp";
import { useContext } from "react";

interface Pag1 {
  tital: string;
  to: string;
}

// const blog = [
//   {id:1,title:"dfds",desc:"fsfsfsfd"},
// ]

// const pages = ['Products', 'Pricing', 'Blog'];
const pages: Pag1[] = [
  { tital: "Products", to: "/Products" },
  { tital: "About Us", to: "/Pricing" },
  { tital: "Contact", to: "/Blog" },
];

const ResponsiveAppBar = () => {
  const { dark, setDark } = useContext(AppContext);

  const [anchorElNav, setAnchorElNav] = React.useState<HTMLElement | null>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<HTMLElement | null>(
    null
  );

  const handleOpenNavMenu: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#00462C" }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link style={{ textDecoration: "none", color: "#FFF" }} to={"/"}>
              LOGO
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
              {/* ======================================================================== */}
              {pages.map((page) => (
                <MenuItem
                  key={page.tital}
                  onClick={handleCloseNavMenu}
                  sx={{ "&:hover": { backgroundColor: "#ECECECC" } }}
                >
                  <Typography textAlign="center">
                    <Link style={{ textDecoration: "none" }} to={page.to}>
                      <Button style={{ color: "#00462C" }}>{page.tital}</Button>
                    </Link>

                    {/*                         withot   object                */}
                    {/*                        to={`/${page}`}               */}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Link style={{ textDecoration: "none", color: "#FFF" }} to={"/"}>
              LOGO
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.tital}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {/* ==================================================================== */}
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={page.to}
                >
                  {page.tital}
                </Link>

                {/*                         withot   object                */}
                {/*                        to={`/${page}`}               */}
              </Button>
            ))}
          </Box>

          <Switch
            // defaultChecked
            color="default"
            onChange={() => setDark(!dark)}
            checked={dark}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
