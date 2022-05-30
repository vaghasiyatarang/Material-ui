import React from 'react'
import Footer from './Footer'
import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { FaLaptopCode, FaThumbsUp } from 'react-icons/fa';
import { GiDiscussion } from 'react-icons/gi';
import { GoVersions } from 'react-icons/go';
import { FcSupport } from 'react-icons/fc';
import { MdSecurity } from 'react-icons/md';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { GrDocumentPdf, GrDocumentUpdate } from 'react-icons/gr';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { AppContext } from "../darkMode/MainApp";
import { useContext } from "react";

const Pricing = () => {
  const { dark, setDark } = useContext(AppContext);
  return (
    <>

      <div className='About'>
        <img src="https://element502.com/wp-content/uploads/2017/01/about-post.jpg" style={{ width: "100%", height: "200px" }}></img>
      </div>
      <Container fixed>
        <div style={{ textAlign: "center", padding: "100px" }}>
          <div style={{ fontSize: "40px", fontWeight: "500", color: dark?"#DDF7F8":"#045256" }}>Many Reason to Choose us</div>
          <div style={{ width: "150px", border: "1px solid black", margin: "5px auto " }}></div>
          <p style={{ fontSize: "20px", marginTop: "40px" }}>We are experienced players in the web and working since 2013 in WordPress development. We’ve many reasons to choose us</p>
        </div>

        <Grid container spacing={5}>
          <Grid item lg={4} md={6} sx={{ textAlign: "center" }}>
            <Box sx={{ bgcolor: dark?"#045256":"#eff5f5", p: "20px" }}>
              <FaLaptopCode style={{ fontSize: "45px" }} />
              <div style={{ fontSize: "20px", fontWeight: "500", lineHeight: "3" }}>Clean & Easy to Use Code</div>
              <p style={{ lineHeight: "1.5", fontSize: "16px", wordSpacing: "2px" }}>Clean, well-commented, and structured code styles that help you to start your project quickly.</p>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sx={{ textAlign: "center" }}>
          <Box sx={{ bgcolor: dark?"#045256":"#eff5f5", p: "20px" }}>
              <GiDiscussion style={{ fontSize: "45px" }} />
              <div style={{ fontSize: "20px", fontWeight: "500", lineHeight: "3" }}>Customer Satisfaction</div>
              <p style={{ lineHeight: "1.5", fontSize: "16px", wordSpacing: "2px" }}>We have been producing tens of thousands of websites. Our main goal is customer satisfaction.</p>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sx={{ textAlign: "center", p: "20px" }}>
          <Box sx={{ bgcolor: dark?"#045256":"#eff5f5", p: "20px" }}>
              <GoVersions style={{ fontSize: "45px" }} />
              <div style={{ fontSize: "20px", fontWeight: "500", lineHeight: "3" }}>Free and Premium versions</div>
              <p style={{ lineHeight: "1.5", fontSize: "16px", wordSpacing: "2px" }}>First, use our free version, which helps you before purchase the Premium version. It's a good deal.</p>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sx={{ textAlign: "center", p: "20px" }}>
          <Box sx={{ bgcolor: dark?"#045256":"#eff5f5", p: "20px" }}>
              <GrDocumentPdf style={{ fontSize: "45px" }} />
              <div style={{ fontSize: "20px", fontWeight: "500", lineHeight: "3" }}>Online Documentation</div>
              <p style={{ lineHeight: "1.5", fontSize: "16px", wordSpacing: "2px" }}>Online documentation is available to learn the plugin flow, features, and as well as options.</p>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sx={{ textAlign: "center", p: "20px" }}>
          <Box sx={{ bgcolor: dark?"#045256":"#eff5f5", p: "20px" }}>
              <GrDocumentUpdate style={{ fontSize: "45px" }} />
              <div style={{ fontSize: "20px", fontWeight: "500", lineHeight: "3" }}>Free Updates</div>
              <p style={{ lineHeight: "1.5", fontSize: "16px", wordSpacing: "2px" }}>For all our products, we're providing you free update options. It is helpful for your store.</p>
            </Box>
          </Grid>
          <Grid item lg={4} md={6} sx={{ textAlign: "center", p: "20px" }}>
          <Box sx={{ bgcolor: dark?"#045256":"#eff5f5", p: "20px" }}>
              <FcSupport style={{ fontSize: "45px" }} />
              <div style={{ fontSize: "20px", fontWeight: "500", lineHeight: "3" }}>Live Support !</div>
              <p style={{ lineHeight: "1.5", fontSize: "16px", wordSpacing: "2px" }}>If you have some queries? We are always available to solve your problems.</p>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container fixed>
        <Grid container>
          <Grid item sx={{ textAlign: "center", p: "30px", mt: "10px", mb: "20px" }}>
            <div style={{ fontSize: "45px", fontWeight: "700", color: "#00462C" }}>We help you to achieve your goals and to grow your business.</div>
          </Grid>
        </Grid>
      </Container>

      <Container fixed sx={{mb:"50px"}}>
        <Grid container spacing={5}>
          <Grid item lg={3} md={6} sx={{ textAlign: "center" }}>
            <Box sx={{ bgcolor: "#eff5f5", p: "10px" }}>
              <QrCodeScannerIcon style={{ fontSize: "45px" }} />
              <div style={{ fontSize: "20px", fontWeight: "500", lineHeight: "3" }}>Quality Products</div>
              <p style={{ lineHeight: "1.5", fontSize: "16px", wordSpacing: "2px" }}>If you have some queries? We are always available to solve your problems.</p>
            </Box>
          </Grid>
          <Grid item lg={3} md={6} sx={{ textAlign: "center" }}>
            <Box sx={{ bgcolor: "#eff5f5", p: "10px" }}>
              <MdSecurity style={{ fontSize: "45px" }} />
              <div style={{ fontSize: "20px", fontWeight: "500", lineHeight: "3" }}>Secure Payments</div>
              <p style={{ lineHeight: "1.5", fontSize: "16px", wordSpacing: "2px" }}>If you have some queries? We are always available to solve your problems.</p>
            </Box>
          </Grid>
          <Grid item lg={3} md={6} sx={{ textAlign: "center" }}>
            <Box sx={{ bgcolor: "#eff5f5", p: "10px" }}>
              <FaThumbsUp style={{ fontSize: "45px" }} />
              <div style={{ fontSize: "20px", fontWeight: "500", lineHeight: "3" }}>100% Satisfaction</div>
              <p style={{ lineHeight: "1.5", fontSize: "16px", wordSpacing: "2px" }}>If you have some queries? We are always available to solve your problems.</p>
            </Box>
          </Grid>
          <Grid item lg={3} md={6} sx={{ textAlign: "center" }}>
            <Box sx={{ bgcolor: "#eff5f5", p: "10px" }}>
              <RiCustomerService2Fill style={{ fontSize: "45px" }} />
              <div style={{ fontSize: "20px", fontWeight: "500", lineHeight: "3" }}>24/7 Customer Care</div>
              <p style={{ lineHeight: "1.5", fontSize: "16px", wordSpacing: "2px" }}>If you have some queries? We are always available to solve your problems.</p>
            </Box>
          </Grid>
        </Grid>
      </Container>










      <Footer />
    </>
  )
}

export default Pricing
//                     https://www.coderkart.com/about-us/
