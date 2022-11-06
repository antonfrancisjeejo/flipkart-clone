import { Button, Box } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { ShoppingCart as Cart, FlashOn as Flash } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  leftContainer: {
    minWidth: "40%",
    padding: "40px 0 0 80px",
    [theme.breakpoints?.down("md")]: {
      padding: "20px 40px",
    },
  },
  productImage: {
    padding: "15px 20px",
    border: "1px solid #f0f0f0",
    width: "95%",
  },
  button: {
    width: "46%",
    borderRadius: 2,
    height: 50,
    color: "#fff",
  },
  addToCart: {
    background: "#ff9f00",
  },
  buyNow: {
    background: "#fb641b",
  },
}));

const ActionItem = ({ product }) => {
  const classes = useStyle();

  const buyNow = async () => {};

  const addItemToCart = () => {};
  console.log(product, "image Url");
  return (
    <Box className={classes.leftContainer}>
      <img src={product.imageUrl} className={classes.productImage} alt="" />
      <br />
      <Button
        onClick={() => addItemToCart()}
        className={classes.button}
        style={{ marginRight: 10, backgroundColor: "#ff9f00" }}
        variant="contained"
      >
        <Cart />
        Add to Cart
      </Button>
      <Button
        onClick={() => buyNow()}
        className={classes.button}
        style={{backgroundColor: "#fb641b"}}
        variant="contained"
      >
        <Flash /> Buy Now
      </Button>
    </Box>
  );
};

export default ActionItem;
