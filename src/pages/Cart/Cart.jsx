import { Box, Typography, Button, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

import CartItem from "./CartItem";
import TotalView from "./TotalView";

const useStyle = makeStyles((theme) => ({
  component: {
    padding: "30px 135px",
    display: "flex",
    marginTop: "40px",
    [theme.breakpoints?.down("sm")]: {
      padding: "15px 0",
    },
  },
  leftComponent: {
    paddingRight: 15,
    [theme.breakpoints?.down("sm")]: {
      marginBottom: 15,
    },
  },
  header: {
    padding: "15px 24px",
    background: "#fff",
  },
  bottom: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "16px 22px",
  },
  placeOrder: {
    display: "flex",
    marginLeft: "auto",
    color: "#fff",
    borderRadius: 2,
    width: 250,
    height: 51,
  },
  componentEmpty: {
    width: "80%%",
    height: "65vh",
    background: "#fff",
    margin: "80px 140px",
  },
  image: {
    width: "15%",
    paddingBottom: "1rem",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 70,
  },
}));

const data = [
  {
    id: "product4",
    url: "https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: "Molife Sense 500 Smartwatch  (Black Strap, Freesize)",
    },
    price: {
      mrp: 6999,
      cost: 4049,
      discount: "42%",
    },
    description:
      "The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.",
    discount: "Grab Now",
    tagline: "Best Seller",
  },
  {
    id: "product4",
    url: "https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    detailUrl:
      "https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70",
    title: {
      shortTitle: "Smart Watches",
      longTitle: "Molife Sense 500 Smartwatch  (Black Strap, Freesize)",
    },
    price: {
      mrp: 6999,
      cost: 4049,
      discount: "42%",
    },
    description:
      "The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.",
    discount: "Grab Now",
    tagline: "Best Seller",
  },
];

const Cart = () => {
  const imgUrl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
  const classes = useStyle();
  const cartItems = data;

  const removeItemFromCart = () => {};

  const buyNow = async () => {};

  return (
    <>
      {cartItems.length ? (
        <Grid container className={classes.component}>
          <Grid
            item
            lg={9}
            md={9}
            sm={12}
            xs={12}
            className={classes.leftComponent}
          >
            <Box className={classes.header}>
              <Typography style={{ fontWeight: 600, fontSize: 18 }}>
                Flipkart ({cartItems?.length})
              </Typography>
            </Box>
            {cartItems.map((item) => (
              <CartItem item={item} removeItemFromCart={removeItemFromCart} />
            ))}
            <Box className={classes.bottom}>
              <Button
                onClick={() => buyNow()}
                variant="contained"
                sx={{ backgroundColor: "#fb641b" }}
                className={classes.placeOrder}
              >
                Place Order
              </Button>
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Grid>
      ) : (
        <Box>
          <Box className={classes.componentEmpty}>
            <Box className={classes.container}>
              <img src={imgUrl} className={classes.image} alt="" />
              <Typography sx={{ fontWeight: 700, fontSize: "20px" }}>
                Your cart is empty!
              </Typography>
              <span>Add items to it now.</span>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Cart;
