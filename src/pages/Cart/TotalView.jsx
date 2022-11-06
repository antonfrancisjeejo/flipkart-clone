import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

import clsx from "clsx";

const useStyle = makeStyles({
  component: {
    // width: '30%'
  },
  header: {
    padding: "15px 24px",
    background: "#fff",
  },
  greyTextColor: {
    color: "#878787",
  },
  container: {
    "& > *": {
      marginBottom: 20,
      fontSize: 14,
    },
  },
  price: {
    float: "right",
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 600,
    borderTop: "1px dashed #e0e0e0",
    padding: "20px 0",
    borderBottom: "1px dashed #e0e0e0",
  },
});

const TotalView = ({ cartItems }) => {
  const classes = useStyle();
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  console.log(cartItems, "CardItems");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const totalAmount = () => {
    let price = 0,
      discount = 0;
    console.log(cartItems);
    cartItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };

  useEffect(() => {
    totalAmount();
  }, [cartItems, totalAmount]);

  return (
    <Box className={classes.component}>
      <Box
        className={classes.header}
        style={{ borderBottom: "1px solid #f0f0f0" }}
      >
        <Typography className={classes.greyTextColor}>PRICE DETAILS</Typography>
      </Box>
      <Box className={clsx(classes.header, classes.container)}>
        <Typography sx={{ marginBottom: ".5rem" }}>
          Price ({cartItems?.length} item)
          <span className={classes.price}>₹{price}</span>
        </Typography>
        <Typography sx={{ marginBottom: ".5rem" }}>
          Discount<span className={classes.price}>-₹{discount}</span>
        </Typography>
        <Typography sx={{ marginBottom: ".5rem" }}>
          Delivery Charges<span className={classes.price}>₹40</span>
        </Typography>
        <Typography className={classes.totalAmount}>
          Total Amount
          <span className={classes.price}>₹{price - discount + 40}</span>
        </Typography>
        <Typography
          style={{ fontSize: 16, marginTop: ".5rem", color: "green" }}
        >
          You will save ₹{discount - 40} on this order
        </Typography>
      </Box>
    </Box>
  );
};

export default TotalView;
