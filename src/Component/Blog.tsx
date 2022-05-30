import React, { Suspense } from "react";
import Footer from "./Footer";
import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { MdLocationOn } from "react-icons/md";
import { FaMobile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GrSkype } from "react-icons/gr";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Map from "./Map";

const Blog = () => {
  return (
    <div>
      <Container>
        <Grid container sx={{ justifyContent: "center", mt: "100px" }}>
          <Grid item>
            <label style={{ fontSize: "40px" }}>Contact Us</label>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ justifyContent: "center", textAlign: "center", mt: "30px" }}
        >
          <Grid item>
            <label style={{ fontSize: "30px" }}>
              Need Something? We're always happy to help.
            </label>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ flexGrow: 1, bgcolor: "#eff5f5" }}>
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "center", mt: "50px", mb: "100px" }}
        >
          {/* <Grid item lg={6} sx={{ textAlign: "end" }}>
            <Suspense fallback={<h1 style={{textAlign:"center",marginTop:"300px"}}>Please Weit</h1>}>
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7437.959332697416!2d72.86007212644795!3d21.232654894108464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f3e87e05bb3%3A0xd38342b96d812021!2sUttran%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1650965064212!5m2!1sen!2sin"
              height="400px"
              frameBorder=""
              style={{ border: 0 }}
              allowFullScreen={false}
              aria-hidden="false"
              tabIndex={0}
            />
            </Suspense>
          </Grid> */}

            {/* <Suspense fallback={<h1 style={{ textAlign: "center", marginTop: "300px" }}>Please Weit</h1>}> */}
          <Grid item lg={6} sx={{ textAlign: "end" }}>
              <Map />
          </Grid>
            {/* </Suspense> */}

          <Grid item sx={{ color: "#494949", lineHeight: 1.5 }} lg={6}>
            <Box>
              <div style={{ fontSize: "25px", fontWeight: 500 }}>
                Contact information
              </div>
            </Box>
            <Box>
              <div>
                <MdLocationOn /> Head Office:
              </div>
            </Box>
            <Box>
              <div> 117 - Angel Square, VIP Circle, Uttran, Surat,</div>
            </Box>
            <Box>
              <div> Gujarat 394105</div>
            </Box>
            <Box>
              <div>
                <FaMobile /> +91 0000000000
              </div>
            </Box>
            <br></br>

            <Box>
              <div>
                <MdLocationOn /> Branch Office:
              </div>
            </Box>
            <Box>
              <div> 324, Sagar Complex, Opp. Gangajaliya Talav,</div>
            </Box>
            <Box>
              <div> Near Jasonath Chowk, Bhavnagar - 364001</div>
            </Box>
            <Box>
              <div>
                <FaMobile /> +91 0000000000
              </div>
            </Box>
            <br></br>

            <Box>
              <div>
                <MdEmail /> info@infotech.com
              </div>
            </Box>
            <Box>
              <div>
                <GrSkype /> Skype ID: info_infotech
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Container>
        <Grid container>
          <Grid item xs={12} sx={{ textAlign: "center" }}>
            <div style={{ fontSize: "40px", marginBottom: "20px" }}>
              Drop Us a Line
            </div>
          </Grid>
        </Grid>
      </Container>

      <Box>
        <Grid container spacing={1}>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={12}
            textAlign={{ xs: "center", sm: "end" }}
          >
            <TextField
              id="filled-basic"
              label="First Name"
              variant="filled"
              style={{ margin: "10px", width: "300px" }}
            />
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={12}
            textAlign={{ xs: "center", sm: "start" }}
          >
            <TextField
              id="filled-basic"
              label="Last Name"
              variant="filled"
              style={{ margin: "10px", width: "300px" }}
            />
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={12}
            textAlign={{ xs: "center", sm: "end" }}
          >
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              style={{ margin: "10px", width: "300px" }}
            />
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={12}
            textAlign={{ xs: "center", sm: "start" }}
          >
            <TextField
              id="filled-basic"
              label="Phone"
              variant="filled"
              style={{ margin: "10px", width: "300px" }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid
            item
            xl={12}
            lg={12}
            md={12}
            sm={12}
            xs={12}
            sx={{ textAlign: "center" }}
          >
            <TextField
              className="msgtext"
              style={{ margin: "10px" }}
              id="standard-multiline-static"
              label="Message"
              multiline
              rows={4}
              variant="filled"
            />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{ justifyContent: "center", mb: "100px", mt: "10px" }}
        >
          <Grid item>
            <Stack spacing={2} direction="row">
              <Button
                variant="contained"
                style={{ borderRadius: "50px", padding: "10px" }}
              >
                SEND MESSAGE
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </div>
  );
};

export default Blog;
