import React from "react";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { BookmarkAdded } from "@mui/icons-material";
import { Link } from "react-router-dom";
import DrawerMenu from "../shared/DrawerMenu";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ display: { xs: "flex", sm: "none" }, mr: 2 }}>
              <DrawerMenu/>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <Typography variant="h6" component="h1" fontWeight="500" mr={3}>
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                  صفحه اصلی
                </Link>
              </Typography>
              <Typography variant="h6" component="h1" fontWeight="500" mr={3}>
                <Link
                  to="/blogs"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  مقاله ها
                </Link>
              </Typography>
              <Typography variant="h6" component="h1" fontWeight="500">
                <Link
                  to="/authors"
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  نویسنده ها
                </Link>
              </Typography>
            </Box>
            <Box>
              <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
                <BookmarkAdded />
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
