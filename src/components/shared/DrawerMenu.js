import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
const DrawerMenu = () => {
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <Box
      sx={{ width: 160 }}
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemIcon
            sx={{
              paddingLeft: "20px",
              paddingTop: "10px",
              paddingBottom: "10px",
              cursor: "pointer",
            }}
          >
            <CloseIcon />
          </ListItemIcon>
        </ListItem>
        <ListItem disablePadding>
          <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
            <ListItemButton>
              <ListItemText
                primary="صفحه اصلی"
                sx={{ fontWeight: "800", paddingLeft: "5px" }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to="/blogs" style={{ textDecoration: "none", color: "#333" }}>
            <ListItemButton>
              <ListItemText
                primary="مقاله ها"
                sx={{ fontWeight: "800", paddingLeft: "5px" }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to="/authors" style={{ textDecoration: "none", color: "#333" }}>
            <ListItemButton>
              <ListItemText
                primary="نویسنده ها"
                sx={{ fontWeight: "800", paddingLeft: "5px" }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <IconButton onClick={toggleDrawer("left", true)}>
        <MenuIcon sx={{ color: "#fff" }} />
      </IconButton>
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </>
  );
};

export default DrawerMenu;
