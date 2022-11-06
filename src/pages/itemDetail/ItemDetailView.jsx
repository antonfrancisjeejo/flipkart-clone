import { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/styles";

import ProductDetail from "./ProductDetail";
import ActionItem from "./ActionItem";
import { useParams } from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  component: {
    marginTop: "80px",
    background: "#F2F2F2",
  },
  container: {
    background: "#FFFFFF",
    display: "flex",
    [theme.breakpoints?.down("md")]: {
      margin: 0,
    },
  },
  rightContainer: {
    marginTop: 50,
    "& > *": {
      marginTop: 10,
    },
  },
  price: {
    fontSize: 28,
  },
  smallText: {
    fontSize: 14,
  },
  greyTextColor: {
    color: "#878787",
  },
}));

const data = {
  id: "1",
  url: "https://assets2.razerzone.com/images/pnx.assets/3e32e8cae6aa86dc0fea5bbf631e6cea/razer-blade-15-studio-768x500-mobile.jpg",
  imageUrl:
    "https://assets2.razerzone.com/images/pnx.assets/3e32e8cae6aa86dc0fea5bbf631e6cea/razer-blade-15-studio-768x500-mobile.jpg",
  title: {
    shortTitle: "",
    longTitle: "",
  },
  price: {
    mrp: 100,
    cost: 200,
    discount: "10%",
  },
  description: "",
  discount: "Extra 10% Off",
  tagline: "",
};

const ItemDetailView = ({ history, match }) => {
  const classes = useStyles();
  const fAssured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const [product, setProduct] = useState(data);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  return (
    <Box className={classes.component}>
      <Box></Box>
      {product && Object.keys(product).length && (
        <Grid container className={classes.container}>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <Grid
            item
            lg={8}
            md={8}
            sm={8}
            xs={12}
            className={classes.rightContainer}
          >
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              className={clsx(classes.greyTextColor, classes.smallText)}
              style={{ marginTop: 5, display: "flex" }}
            >
              8 Ratings & 1 Reviews
              <span>
                <img
                  src={fAssured}
                  style={{ width: 77, marginLeft: 20 }}
                  alt=""
                />
              </span>
            </Typography>
            <Typography>
              <span className={classes.price}>₹{product.price.cost}</span>
              &nbsp;&nbsp;&nbsp;
              <span className={classes.greyTextColor}>
                <strike>₹{product.price.mrp}</strike>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>
                {product.price.discount} off
              </span>
            </Typography>
            <ProductDetail product={product} />
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default ItemDetailView;
