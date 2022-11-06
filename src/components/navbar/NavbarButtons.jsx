import React, { useState } from "react";
import { Link } from "react-router-dom";

import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import LoginDialog from "../../pages/login/LoginDialog";

const NavbarButtons = () => {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Box className="flex items-center">
      <Link>
        <button
          style={{
            background: "#ffffff",
            color: "#2874f0",
            fontWeight: 600,
            textTransform: "none",
            padding: "5px 40px",
            borderRadius: "5px",
          }}
          variant="contained"
          onClick={() => openDialog()}
        >
          Login
        </button>
      </Link>
      <Typography className="pl-4">Become a seller</Typography>
      <Link>
        <Typography className="pl-4">More</Typography>
      </Link>
      <Link to="/cart">
        <div style={{ display: "flex" }}>
          <Badge badgeContent={5} className="pl-4" color="secondary">
            <ShoppingCartIcon />
          </Badge>
          <Typography style={{ marginLeft: 10 }}>Cart</Typography>
        </div>
      </Link>
      <LoginDialog open={open} setOpen={setOpen} />
    </Box>
  );
};

export default NavbarButtons;
