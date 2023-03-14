import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";

const CommentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  return (
    <Grid
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          فرم ارسال کامنت
        </Typography>
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="نام کاربری"
          variant="outlined"
          value={name}
          onChange={(e)=> setName(e.target.value) }
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="ایمیل"
          variant="outlined"
          value={email}
          onChange={(e)=> setEmail(e.target.value) }
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="متن کامنت"
          variant="outlined"
          value={text}
          onChange={(e)=> setText(e.target.value) }
          multiline
          minRows={4}
          sx={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <Button variant="contained">ارسال</Button>
      </Grid>
    </Grid>
  );
};

export default CommentForm;
