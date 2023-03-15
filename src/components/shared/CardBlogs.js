import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const CardBlogs = ({ title, slug, coverPhoto, author }) => {
  return (
    <Card sx={{ boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px", borderRadius: 4 }}>
      {author && (
        <CardHeader
          avatar={
            <Avatar src={author.avatar.url} sx={{ width: 70, height: 70 }} />
          }
          title={
            <Typography component="p" varaint="p" color="text.secondary" fontSize={18}>
              {author.name}
            </Typography>
          }
          subheader={
            <Typography component="p" varaint="p" color="text.secondary">
              {author.field}
            </Typography>
          }
        />
      )}
      <CardMedia
        component="img"
        height="250"
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography
          component="h3"
          variant="h6"
          color="text.primary"
          fontWeight={600}
          fontSize={16}
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions>
        <Link
          to={`/blogs/${slug}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Button
            variant="outlined"
            size="small"
            sx={{ width: "100%", borderRadius: 3 }}
          >
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardBlogs;