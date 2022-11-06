import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
import { navData } from "../../../constant/data";

const useStyle = makeStyles((theme) => ({
  component: {
    display: "flex",
    justifyContent: "space-between",
    margin: "60px 130px 0 130px",
    overflowX: "overlay",
    [theme.breakpoints?.down("md")]: {
      margin: 0,
    },
  },
  container: {
    padding: "12px 8px",
    textAlign: "center",
  },
  image: {
    width: 64,
  },
  text: {
    fontSize: 14,
    fontWeight: 600,
    fontFamily: "inherit",
  },
}));

const NavBar = () => {
  const navigate = useNavigate();
  const classes = useStyle();
  return (
    <Box className={classes.component}>
      {navData.map((temp) => (
        <Box
          className={classes.container}
          onClickCapture={() => navigate("productList/1")}
        >
          <img src={temp.url} className={classes.image} alt="" />
          <Typography className={classes.text}>{temp.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default NavBar;
