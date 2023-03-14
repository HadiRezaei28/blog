import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { BookmarkAdded } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h5" component="h1" fontWeight="700" flex={1}>
            <Link to="/" style={{textDecoration: "none", color: "#fff"}}>وبلاگ برنامه نویسی</Link>
          </Typography>
          <Link to="/" style={{textDecoration: "none", color: "#fff"}}>
            <BookmarkAdded />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
