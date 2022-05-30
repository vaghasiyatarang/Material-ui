import { textAlign } from "@mui/system";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Home from './Component/Home';
// import Blog from './Component/Blog'
import ResponsiveAppBar from "./Component/Nav";
// import Pricing from './Component/Pricing';
// import Products from './Component/Products';

const Home = React.lazy(() => import("./Component/Home"));
const Blog = React.lazy(() => import("./Component/Blog"));
const Pricing = React.lazy(() => import("./Component/Pricing"));
const Products = React.lazy(() => import("./Component/Products"));
import CircularProgress from "@mui/material/CircularProgress";



function App() {


  return (
    <>
      {/* <Text_field /> */}
      {/* <Button_design /> */}
      {/* <Buttongroup_design /> */}
      {/* <Mix /> */}

      <ResponsiveAppBar />
      <Suspense
        fallback={
          <h1 style={{ textAlign: "center", marginTop: "300px" }}>
            <CircularProgress />
          </h1>
        }
      >
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Blog" element={<Blog />}></Route>
              <Route path="/Pricing" element={<Pricing />}></Route>
              <Route path="/Products" element={<Products />}></Route>
            </Routes>
      </Suspense>
    </>
  );
}

export default App;
