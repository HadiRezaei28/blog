import { useQuery } from "@apollo/client";
import {
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../graphql/quries";
import Loader from "../shared/Loader";
import { ArrowBackRounded } from "@mui/icons-material";
import CommentForm from "../comment/CommentForm";
import Comment from "../comment/Comment";

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, data, errors } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (errors) return <h3>Errors...</h3>;

  return (
    <Container maxWidth="lg">
      <Grid container mt={10} padding={3}>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            color="primary"
            fontWeight={700}
          >
            {data.post.title}
          </Typography>
          <IconButton
            color="primary"
            component="label"
            onClick={() => navigate(-1)}
          >
            <ArrowBackRounded />
          </IconButton>
        </Grid>
        <Grid item xs={12} mt={6}>
          <img
            src={data.post.coverPhoto.url}
            alt={data.post.slug}
            style={{ width: "100%", borderRadius: 15 }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          mt={7}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Avatar
            src={data.post.author.avatar.url}
            sx={{ width: "80px", height: "80px", marginRight: 2 }}
          />
          <Box component="div">
            <Typography component="p" variant="h5" fontWeight={700}>
              {data.post.author.name}
            </Typography>
            <Typography component="p" variant="p" color="text.secondary">
              {data.post.author.field}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} mt={5}>
          {data.post.content.text}
        </Grid>
        <Grid item xs={12}>
          <CommentForm slug={slug} />
        </Grid>
        <Grid item xs={12}>
          <Comment slug={slug} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogPage;
