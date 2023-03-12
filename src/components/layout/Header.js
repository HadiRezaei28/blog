import React from "react";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { BookmarkAdded } from "@mui/icons-material";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h5" component="h1" fontWeight="700" flex={1}>
            وبلاگ برنامه نویسی
          </Typography>
          <BookmarkAdded />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
