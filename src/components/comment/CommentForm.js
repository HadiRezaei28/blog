import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "../../graphql/mutaitions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { commentSchema } from "../validations/commentFromValidation";

const CommentForm = ({ slug }) => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      text: "",
    },
    validationSchema: commentSchema,
    onSubmit: () => {
      sendComment();
      // if (data) {
        toast.success("کامنت ارسال شد و منتظر تایید می باشد", {
          position: "top-center",
        });
      // }
    },
  });

  const { name, email, text } = formik.values;
  const [sendComment, { loading, data, errors }] = useMutation(SEND_COMMENT, {
    variables: { name, email, text, slug },
  });

  // const sendHandler = () => {
  //   if (name && email && text) {
  //     sendComment();
  //     if (data) {
  //       toast.success("کامنت ارسال شد و منتظر تایید می باشد", {
  //         position: "top-center",
  //       });
  //     }
  //   } else {
  //     toast.warn("تمام فیلدها را پر کنید", {
  //       position: "top-center",
  //     });
  //   }
  // };

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
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="name"
            name="name"
            label="نام کاربری"
            variant="outlined"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{ width: "100%", mb: 2 }}
          />
          <TextField
            id="email"
            name="email"
            label="ایمیل"
            variant="outlined"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{ width: "100%", mb: 2 }}
          />
          <TextField
            id="text"
            name="text"
            label="متن کامنت"
            variant="outlined"
            value={formik.values.text}
            onChange={formik.handleChange}
            error={formik.touched.text && Boolean(formik.errors.text)}
            helperText={formik.touched.text && formik.errors.text}
            multiline
            minRows={4}
            sx={{ width: "100%", mb: 2 }}
          />
          {loading ? (
            <Button variant="contained" disabled>
              در حال ارسال...
            </Button>
          ) : (
            <Button variant="contained" type="submit">
              ارسال
            </Button>
          )}
        </form>
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default CommentForm;
