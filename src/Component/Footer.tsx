import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import React from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BiIntersect } from "react-icons/bi";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const Footer = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const footericon: any = [
    <ImFacebook2 />,
    <GrInstagram />,
    <FiTwitter />,
    <AiOutlineLinkedin />,
    <BiIntersect />,
  ];

  const helpname: String[] = ["Contact", "Support", "Privacy"];
  const account: String[] = ["Login","Resistor"];
  const messages:string[] = ["Backup","History","Roll"]

  return (
    <div className="Footer">
      <Box p={{ xs: 3, sm: 10 }} bgcolor={"#192a3f"} color="white">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} m={1}>
                Help
              </Box>
              {helpname.map((helpname: any, i: any) => (
                <Box m={1} key={i}>
                  <Link color="inherit" sx={{ textDecoration: "none" }}>
                    {" "}
                    <span>{helpname}</span>
                  </Link>
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} m={1}>
                Account
              </Box>
              {account.map((account: any, i: any) => (
                <Box m={1} key={i}>
                  <Link color="inherit" sx={{ textDecoration: "none" }}>
                    {" "}
                    <span>{account}</span>
                  </Link>
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} m={1}>
                Messages
              </Box>
              
              {messages.map((messages: any, i: any) => (
                <Box m={1} key={i}>
                  <Link color="inherit" sx={{ textDecoration: "none" }}>
                    {" "}
                    <span>{messages}</span>
                  </Link>
                </Box>
              ))}
            </Grid>
          </Grid>
          <Grid container justifyContent="center" sx={{ margin: "10px" }}>
            <Grid item>
              <Button
                onClick={handleToggle}
                variant="contained"
                color="error"
                startIcon={<ShoppingCartIcon />}
              >
                Parchase Now
              </Button>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
                onClick={handleClose}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box bgcolor="#152436" color="white">
        <Container>
          <Grid
            container
            spacing={5}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item sx={{ m: 1 }}>
              2022© Velzon - Themesbrand.com
            </Grid>

            <Grid
              item
              sx={{ mx: "10px", display: "flax" }}
              color="silver"
              className="Footer_icon"
            >
              {footericon.map((footericon: any, i: any) => (
                <span key={i} style={{ margin: "0 5px" }}>
                  {footericon}
                </span>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
