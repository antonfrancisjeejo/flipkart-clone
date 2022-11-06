import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import ToolBar from "@mui/material/ToolBar";
import Search from "./Search";
import NavbarButtons from "./NavbarButtons";

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <AppBar position="fixed" className="flex">
      <ToolBar>
        <Box className="flex w-[100%] justify-center  items-center gap-7">
          <Link to="/" className=" text-white decoration-none">
            <Box>
              <img src={logoURL} className="w-[75px]" alt="" />
              <Box component="span" className="flex">
                <Typography
                  sx={{ fontSize: "11px" }}
                  className="text-xs italic"
                >
                  Explore
                  <Box component="span" style={{ color: "#FFE500" }}>
                    {" "}
                    Plus
                  </Box>
                </Typography>
                <img
                  src={subURL}
                  style={{ width: "12px", height: "12px", paddingLeft: "2px" }}
                  alt=""
                />
              </Box>
            </Box>
          </Link>
          <Search />
          <NavbarButtons />
        </Box>
      </ToolBar>
    </AppBar>
  );
};

export default Header;
