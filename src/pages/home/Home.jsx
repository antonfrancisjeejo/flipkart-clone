import React from "react";
import Box from "@mui/material/Box";
import Banner from "./component/Banner";
import Slide from "./component/Slide";
import TopOffers from "./component/TopOffers";
import { furnitureData as products } from "../../constant/data";

const Home = () => {
  return (
    <>
      <TopOffers />
      <Box className="p-3 bg-gray-200">
        <Banner />
        <Slide data={products} title="Discounts for You" multi={true} />
        <Slide data={products} title="Suggested Items" multi={true} />
        <Slide data={products} title="Top Selection" multi={true} />
        <Slide data={products} title="Recommended Items" multi={true} />
      </Box>
    </>
  );
};

export default Home;
