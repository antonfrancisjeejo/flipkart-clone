import React, { useState } from "react";
import { Card, Box, Typography, Button, ButtonGroup } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

import clsx from "clsx";

const useStyle = makeStyles({
  component: {
    borderTop: "1px solid #f0f0f0",
    borderRadius: 0,
    display: "flex",
  },
  leftComponent: {
    margin: 20,
    display: "flex",
    flexDirection: "column",
  },
  image: {
    height: 110,
    width: 110,
  },
  mid: {
    margin: 20,
  },
  greyTextColor: {
    color: "#878787",
  },
  smallText: {
    fontSize: 14,
  },
  price: {
    fontSize: 18,
    fontWeight: 600,
  },
  remove: {
    marginTop: 20,
    fontSize: 16,
  },
  buttonComponent: {
    marginTop: 30,
  },
  button: {
    borderRadius: "50%",
  },
});

const ItemAddButton = () => {
  const classes = useStyle();
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
  };

  return (
    <ButtonGroup className={classes.buttonComponent}>
      <Button
        className={classes.button}
        onClick={() => handleDecrement()}
        disabled={counter === 0}
      >
        -
      </Button>
      <Button disabled>{counter}</Button>
      <Button className={classes.button} onClick={() => handleIncrement()}>
        +
      </Button>
    </ButtonGroup>
  );
};

const CartItem = ({ item, removeItemFromCart }) => {
  console.log(item);
  const classes = useStyle();
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  return (
    <Card className={classes.component}>
      <Box className={classes.leftComponent}>
        <img src={item.url} className={classes.image} alt="" />
        <ItemAddButton />
      </Box>
      <Box className={classes.mid}>
        <Typography>{item.title.longTitle}</Typography>
        <Typography
          className={clsx(classes.greyTextColor, classes.smallText)}
          style={{ marginTop: 10, display: "flex", alginItems: "center" }}
        >
          Seller:RetailNet
          <span>
            <img src={fassured} style={{ width: 50, marginLeft: 10 }} alt="" />
          </span>
        </Typography>
        <Typography style={{ margin: "20px 0" }}>
          <span className={classes.price}>₹{item.price.cost}</span>
          &nbsp;&nbsp;&nbsp;
          <span className={classes.greyTextColor}>
            <strike>₹{item.price.mrp}</strike>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#388E3C" }}>{item.price.discount} off</span>
        </Typography>
        <Button
          className={classes.remove}
          sx={{ marginTop: "12px" }}
          onClick={() => removeItemFromCart(item.id)}
        >
          Remove
        </Button>
      </Box>
    </Card>
  );
};

export default CartItem;
