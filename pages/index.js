import React from "react";
import Navbar from "./navbar";
import ProminentAppBar from "./typography";
import ImageList from "./imageList.js";
import Product from "./product";

const index = () => {
  return (
    <>
      <ProminentAppBar />
      <Navbar />
      <ImageList />
      <Product />
    </>
  );
};

export default index;
