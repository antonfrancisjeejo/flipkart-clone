import React from "react";

import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  greyTextColor: {
    color: "#878787",
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
  },
});
const features = [
  "Panel Type: IPS Panel",
  "Screen Resolution Type: Full HD",
  "Response Time: 4 ms | Refresh Rate: 75 Hz",
  "HDMI Ports - 2",
  "3 Years Warranty",
];
const ItemList = () => {
  const classes = useStyle();
  const fAssured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  return (
    <div className="flex bg-white pt-5 pb-10 pl-5 border-solid border-t-2 border-[#f0f0f0]">
      <Box className="w-[25%]">
        <img
          className="w-[90%]"
          src="https://assets2.razerzone.com/images/pnx.assets/3e32e8cae6aa86dc0fea5bbf631e6cea/razer-blade-15-studio-768x500-mobile.jpg"
          alt=""
        />
      </Box>
      <Box className="w-[55%] pr-5">
        <Typography
          sx={{ fontWeight: 500, color: "#212121", fontSize: "18px" }}
        >
          The Molife Sense 500, a brilliant smartwatch with a beautiful large
          display. Say hello to the infinity smartwatch with a beautiful large
          display. Say hello to the infinity ..
        </Typography>
        <Typography sx={{ fontSize: "14px", color: "#878787" }}>
          14 Ratings & 1 Reviews{" "}
        </Typography>
        <ul>
          {features.map((feat) => (
            <li>{`• ${feat}`}</li>
          ))}
        </ul>
      </Box>
      <Box className="w-[20%]">
        <Typography style={{ marginTop: 5, display: "flex" }}>
          ₹24,000
          <span>
            <img src={fAssured} style={{ width: 77, marginLeft: 20 }} alt="" />
          </span>
        </Typography>
        <Typography>
          <span className={classes.greyTextColor}>
            <strike>₹24,000</strike>
          </span>
          <span style={{ color: "#388E3C", paddingLeft: ".5rem" }}>
            10% off
          </span>
        </Typography>
        <Typography>Free delivery</Typography>
      </Box>
    </div>
  );
};

export default ItemList;
