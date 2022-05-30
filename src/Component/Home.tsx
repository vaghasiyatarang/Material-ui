import React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { teal } from "@mui/material/colors";
import Box from "@mui/material/Box";

import {
  SiBootstrap,
  SiDjango,
  SiPhp,
  SiCakephp,
  SiSvelte,
} from "react-icons/si";
import { ImFire, ImLoop } from "react-icons/im";
import { GrNode } from "react-icons/gr";
import {
  FaReact,
  FaAngular,
  FaVuejs,
  FaLaravel,
  FaWaveSquare,
  FaSymfony,
} from "react-icons/fa";
import Home_card_light from "./Home_card_light";
import Home_card_dark from "./Home_card_dark";
import Footer from "./Footer";

const Home = () => {
  const Root1 = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("xs")]: {
      color: teal[900],
    },
  }));

  const Rootmain = styled("div")(({ theme }) => ({
    [theme.breakpoints.only("sm")]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(6),
    },
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(8),
    },
    [theme.breakpoints.up("lg")]: {
      padding: theme.spacing(10),
    },
  }));

  const Stack = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(5),
      textAlign: "center",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(5),
      textAlign: "center",
    },
  }));

  const Rooticon = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(5),
      textAlign: "center",
    },
    [theme.breakpoints.down("md")]: {
      marginTop: theme.spacing(5),
      textAlign: "center",
    },
  }));

  const Mainicon = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  interface homepage_icon{
    icon:any,
    name:string
  }

  const homeicon: homepage_icon[] = [
    { icon: <SiBootstrap style={{color:"purple"}} />, name: "Bootstrap 5" },
    { icon: <FaReact style={{color:"skyblue"}} />, name: "React" },
    { icon: <FaAngular style={{color:"red"}} />, name: "Angular 13" },
    { icon: <FaVuejs  style={{color:"green"}}/>, name: "vue 3" },
    { icon: <FaLaravel style={{color:"red"}} />, name: "Laravel 9" },
    { icon: <SiDjango style={{color:"green"}} />, name: "Django" },
    { icon: <FaWaveSquare style={{color:"skyblue"}} />, name: "ASP.Net Cor 6" },
    { icon: <ImFire style={{color:"#df7520"}} />, name: "Codelgniter 4" },
    { icon: <FaSymfony/>, name: "Saymfony" },
    { icon: <SiPhp  style={{color:"#b5dae6"}}/>, name: "PHP" },
    { icon: <ImLoop  style={{color:"#37b8e2"}}/>, name: "Ajax" },
    { icon: <GrNode  style={{color:"#67faca"}}/>, name: "Node js" },
    { icon: <SiCakephp  style={{color:"red"}}/>, name: "Cake PHP 4.3" },
    { icon: <SiSvelte  style={{color:"#fc430f"}}/>, name: "SiSvelte" },
  ];

  return (
    <>
      <Rootmain className="Mainback">
        <Grid>
          <Container>
            <Root1>
              <h1 style={{ textAlign: "center" }}>
                13 in 1 Premium Multipurpose Admin and
              </h1>
            </Root1>
            <h1
              style={{
                color: "#00462C",
                textAlign: "center",
                lineHeight: "1.5",
              }}
            >
              Dashboard Template
            </h1>
            <div style={{ marginTop: "30px" }}>
              <p
                style={{
                  color: "silver",
                  textAlign: "center",
                  lineHeight: "1.5",
                  letterSpacing: "1.5px",
                }}
              >
                Velzon is an admin dashboard template built with{" "}
                <b style={{ color: "black" }}>
                  {" "}
                  Bootstrap v5.1.3, React Js, Angular 13, Vue 3, Laravel 9,
                  Django, ASP.Net Core 6, CodeIgniter 4, Symfony, PHP, NodeJs,
                  Ajax and Cake PHP.{" "}
                </b>{" "}
                You can build any type of web application like eCommerce, CRM,
                CMS, project management apps, admin panels etc using velzon.
              </p>
            </div>
            <Stack>
              <Button
                sx={{ margin: "10px" }}
                variant="contained"
                color="error"
                endIcon={<ShoppingCartIcon />}
              >
                Purchase
              </Button>
              <Button
                variant="outlined"
                color="error"
                endIcon={<ShoppingCartIcon />}
              >
                Documentation
              </Button>
            </Stack>

            <Rooticon>
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  sx={{ textAlign: "center", justifyContent: "center" }}
                >
                  {/* <Grid item xl={1.5} lg={1.5} md={2} sm={2.5} xs={3}>
                  <Mainicon style={{ textAlign: "center" }}>
                    <div><SiBootstrap style={{ fontSize: 32, color: "purple" }} /></div>
                    <div>Bootstrap 5</div>
                  </Mainicon>
                </Grid> */}

                  {homeicon.map((homeicon: any, i: number) => (
                    <Grid item key={i} xl={1.5} lg={1.5} md={2} sm={2.5} xs={3}>
                      <Mainicon style={{ textAlign: "center" }}>
                        <div>
                          <span style={{ fontSize: 32}}>
                            {homeicon.icon}
                          </span>
                        </div>
                        <div>{homeicon.name}</div>
                      </Mainicon>
                    </Grid>
                  ))}

                  {/* <Grid item xl={1.5} lg={1.5} md={2} sm={2.5} xs={3}>
                    <Mainicon style={{ textAlign: "center" }}>
                      <div>
                        <FaReact style={{ fontSize: 32, color: "skyblue" }} />
                      </div>
                      <div>React</div>
                    </Mainicon>
                  </Grid>

                  <Grid item xl={1.5} lg={1.5} md={2} sm={2.5} xs={3}>
                    <Mainicon style={{ textAlign: "center" }}>
                      <div>
                        <FaAngular style={{ fontSize: 32, color: "red" }} />
                      </div>
                      <div>Angular 13</div>
                    </Mainicon>
                  </Grid>

                  <Grid item xl={1.5} lg={1.5} md={2} sm={2.5} xs={3}>
                    <Mainicon style={{ textAlign: "center" }}>
                      <div>
                        <FaVuejs style={{ fontSize: 32, color: "green" }} />
                      </div>
                      <div>Vue 3</div>
                    </Mainicon>
                  </Grid>

                  <Grid item xl={1.5} lg={1.5} md={2} sm={2.5} xs={3}>
                    <Mainicon style={{ textAlign: "center" }}>
                      <div>
                        <FaLaravel style={{ fontSize: 32, color: "red" }} />
                      </div>
                      <div>Laravel 9</div>
                    </Mainicon>
                  </Grid>

                  <Grid item xl={1.5} lg={1.5} md={2} sm={2.5} xs={3}>
                    <Mainicon style={{ textAlign: "center" }}>
                      <div>
                        <SiDjango style={{ fontSize: 32, color: "green" }} />
                      </div>
                      <div>Django</div>
                    </Mainicon>
                  </Grid>

                  <Grid item xl={1.5} lg={1.5} md={2} sm={2.5} xs={3}>
                    <Mainicon style={{ textAlign: "center" }}>
                      <div>
                        <FaWaveSquare
                          style={{ fontSize: 32, color: "skyblue" }}
                        />
                      </div>
                      <div>ASP.Net Core 6</div>
                    </Mainicon>
                  </Grid>

                  <Grid item xl={1.5} lg={1.5} md={2} sm={2.5} xs={3}>
                    <Mainicon style={{ textAlign: "center" }}>
                      <div>
                        <ImFire style={{ fontSize: 32, color: "#df7520" }} />
                      </div>
                      <div>CodeIgniter 4</div>
                    </Mainicon>
                  </Grid>

                  <Grid item xl={1.5} lg={1.5} md={2} sm={2.5} xs={3}>
                    <Mainicon style={{ textAlign: "center" }}>
                      <div>
                        <FaSymfony style={{ fontSize: 32 }} />
                      </div>
                      <div>Saymfony</div>
                    </Mainicon>
                  </Grid>

                  <Grid item xl={1.5} lg={1.5} md={2} sm={2.5} xs={3}>
                    <Mainicon style={{ textAlign: "center" }}>
                      <div>
                        <SiPhp style={{ fontSize: 32, color: "#b5dae6" }} />
                      </div>
                      <div>PHP</div>
                    </Mainicon>
                  </Grid>

                  <Grid item xl={1.5} lg={1.5} md={2} sm={2.5} xs={3}>
                    <Mainicon style={{ textAlign: "center" }}>
                      <div>
                        <ImLoop style={{ fontSize: 32, color: "#37b8e2" }} />
                      </div>
                      <div>Ajax</div>
                    </Mainicon>
                  </Grid>

                  <Grid item xl={1.5} lg={1.5} md={2} sm={2.5} xs={3}>
                    <Mainicon style={{ textAlign: "center" }}>
                      <div>
                        <GrNode style={{ fontSize: 32, color: "#67faca" }} />
                      </div>
                      <div>Node js</div>
                    </Mainicon>
                  </Grid>

                  <Grid item xl={1.5} lg={1.5} md={2} sm={2.5} xs={3}>
                    <Mainicon style={{ textAlign: "center" }}>
                      <div>
                        <SiCakephp style={{ fontSize: 32, color: "red" }} />
                      </div>
                      <div>Cake PHP 4.3</div>
                    </Mainicon>
                  </Grid>

                  <Grid item xl={1.5} lg={1.5} md={2} sm={2.5} xs={3}>
                    <Mainicon style={{ textAlign: "center" }}>
                      <div>
                        <SiSvelte style={{ fontSize: 32, color: "#fc430f" }} />
                      </div>
                      <div>SiSvelte</div>
                    </Mainicon>
                  </Grid> */}
                </Grid>
              </Box>
            </Rooticon>
          </Container>
        </Grid>
      </Rootmain>
      <Home_card_light />
      <Home_card_dark />
      <Footer />
    </>
  );
};

export default Home;
